const prisma = require('../config/prisma');

exports.getOrdersItem = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const order = await prisma.order.findUnique({
            where: { id: orderId }
        });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        const orderItems = await prisma.orderitem.findMany({
            where: { orderId },
            include: {
                menuitem: {
                    select: {
                        name: true,
                        menucategory: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            skip: parseInt(offset),
            take: parseInt(limit)
        });

        const total = await prisma.orderitem.count({ where: { orderId } });

        // จัดรูปแบบข้อมูลก่อนส่งกลับ
        const simplifiedItems = orderItems.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            status: item.status,
            menuItem: {
                name: item.menuitem.name,
                category: item.menuitem.menucategory.name
            }
        }));

        res.json({
            success: true,
            data: {
                items: simplifiedItems,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error('Get order items error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


exports.addOrdersItem = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { menuItemId, quantity, notes } = req.body;

        // Validation
        if (!menuItemId || !quantity || quantity <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Menu item ID and valid quantity are required'
            });
        }

        // ตรวจสอบว่า order และ menu item มีอยู่หรือไม่
        const [order, menuItem] = await Promise.all([
            prisma.order.findUnique({ where: { id: orderId } }),
            prisma.menuitem.findUnique({ where: { id: menuItemId } })
        ]);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        if (!menuItem || !menuItem.active) {
            return res.status(404).json({
                success: false,
                message: 'Menu item not found or inactive'
            });
        }

        // ตรวจสอบสต็อก
        const ingredients = await prisma.menuitemingredient.findMany({
            where: { menuItemId },
            include: { inventoryitem: true }
        });

        for (const ingredient of ingredients) {
            const requiredQuantity = ingredient.quantityRequired * quantity;
            if (ingredient.inventoryitem.quantityInStock < requiredQuantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient stock for ${ingredient.inventoryitem.name}`
                });
            }
        }

        // สร้าง order item
        const orderItem = await prisma.orderitem.create({
            data: {
                orderId,
                menuItemId,
                quantity: parseInt(quantity),
                price: menuItem.price,
                notes,
                status: 'PENDING'
            },
            include: {
                menuitem: {
                    include: { menucategory: true }
                }
            }
        });

        res.status(201).json({
            success: true,
            data: {
                id: orderItem.id,
                quantity: orderItem.quantity,
                price: orderItem.price,
                notes: orderItem.notes,
                status: orderItem.status,
                createdAt: orderItem.createdAt,
                menuItem: {
                    name: orderItem.menuitem.name,
                    price: orderItem.menuitem.price,
                    imageUrl: orderItem.menuitem.imageUrl,
                    menucategory: {
                        name: orderItem.menuitem.menucategory.name
                    }
                }
            },

            message: 'Order item added successfully'
        });
    } catch (error) {
        console.error('Add order item error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}


exports.updateOrdersItem = async (req, res) => {
    try {
        const { orderId, id } = req.params;
        const { quantity, notes } = req.body;

        // ตรวจสอบว่า order item มีอยู่หรือไม่
        const existingItem = await prisma.orderitem.findFirst({
            where: { id, orderId },
            include: { menuitem: true }
        });

        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: 'Order item not found'
            });
        }

        // ไม่สามารถแก้ไขได้ถ้าสถานะเป็น SERVED หรือ COMPLETED
        if (['SERVED', 'COMPLETED'].includes(existingItem.status)) {
            return res.status(400).json({
                success: false,
                message: 'Cannot update served or completed items'
            });
        }

        const updateData = {};
        if (quantity !== undefined) {
            if (quantity <= 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Quantity must be greater than 0'
                });
            }

            // ตรวจสอบสต็อกถ้ามีการเปลี่ยนจำนวน
            if (quantity !== existingItem.quantity) {
                const ingredients = await prisma.menuitemingredient.findMany({
                    where: { menuItemId: existingItem.menuItemId },
                    include: { inventoryitem: true }
                });

                for (const ingredient of ingredients) {
                    const additionalQuantity = (quantity - existingItem.quantity) * ingredient.quantityRequired;
                    if (additionalQuantity > 0 && ingredient.inventoryitem.quantityInStock < additionalQuantity) {
                        return res.status(400).json({
                            success: false,
                            message: `Insufficient stock for ${ingredient.inventoryitem.name}`
                        });
                    }
                }
            }

            updateData.quantity = parseInt(quantity);
        }

        if (notes !== undefined) {
            updateData.notes = notes;
        }

        const updatedItem = await prisma.orderitem.update({
            where: { id },
            data: { ...updateData, updatedAt: new Date() },
            include: {
                menuitem: {
                    include: { menucategory: true }
                }
            }
        });

        res.json({
            success: true,
            data: {
                id: updatedItem.id,
                quantity: updatedItem.quantity,
                price: updatedItem.price,
                notes: updatedItem.notes,
                status: updatedItem.status,
                updatedAt: updatedItem.updatedAt,
                menuItem: {
                    name: updatedItem.menuitem.name,
                    price: updatedItem.menuitem.price,
                    imageUrl: updatedItem.menuitem.imageUrl,
                    menucategory: {
                        name: updatedItem.menuitem.menucategory.name
                    }
                }
            },
            message: 'Order item updated successfully'
        });
    } catch (error) {
        console.error('Update order item error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.updateOrdersItemStatus = async (req, res) => {
    try {
        const { orderId, id } = req.params;
        const { status } = req.body;

        const validStatuses = ['PENDING', 'PREPARING', 'SERVED', 'COMPLETED', 'CANCELLED'];
        if (!status || !validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Valid status is required',
                validStatuses
            });
        }

        // ตรวจสอบว่า order item มีอยู่หรือไม่
        const existingItem = await prisma.orderitem.findFirst({
            where: { id, orderId }
        });

        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: 'Order item not found'
            });
        }

        // ตรวจสอบ status transition logic
        const statusTransitions = {
            'PENDING': ['PREPARING', 'CANCELLED'],
            'PREPARING': ['SERVED', 'CANCELLED'],
            'SERVED': ['COMPLETED'],
            'COMPLETED': [],
            'CANCELLED': []
        };

        if (!statusTransitions[existingItem.status].includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Cannot change status from ${existingItem.status} to ${status}`
            });
        }

        const updatedItem = await prisma.orderitem.update({
            where: { id },
            data: {
                status,
                updatedAt: new Date()
            },
            include: {
                menuitem: {
                    include: { menucategory: true }
                }
            }
        });

        res.json({
            success: true,
            data: {
                id: updatedItem.id,
                quantity: updatedItem.quantity,
                price: updatedItem.price,
                notes: updatedItem.notes,
                status: updatedItem.status,
                updatedAt: updatedItem.updatedAt,
                menuItem: {
                    name: updatedItem.menuitem.name,
                    price: updatedItem.menuitem.price,
                    imageUrl: updatedItem.menuitem.imageUrl,
                    menucategory: {
                        name: updatedItem.menuitem.menucategory.name
                    }
                }
            },
            message: 'Order item status updated successfully'
        });
    } catch (error) {
        console.error('Update order item status error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.deleteOrdersItem = async (req, res) => {
    try {
        const { orderId, id } = req.params;

        // ตรวจสอบว่า order item มีอยู่หรือไม่
        const existingItem = await prisma.orderitem.findFirst({
            where: { id, orderId }
        });

        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: 'Order item not found'
            });
        }

        // ไม่สามารถลบได้ถ้าสถานะเป็น PREPARING, SERVED หรือ COMPLETED
        if (['PREPARING', 'SERVED', 'COMPLETED'].includes(existingItem.status)) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete item that is being prepared, served, or completed'
            });
        }

        await prisma.orderitem.delete({
            where: { id }
        });

        res.json({
            success: true,
            message: 'Order item deleted successfully'
        });
    } catch (error) {
        console.error('Delete order item error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}
