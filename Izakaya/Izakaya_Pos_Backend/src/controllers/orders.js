const prisma = require('../config/prisma');

exports.getAllOrders = async (req, res) => {
    try {
        const {
            status,
            userId,
            startDate,
            endDate,
            page = 1,
            limit = 20,
            sortBy = 'createdAt',
            sortOrder = 'desc'
        } = req.query;

        const skip = (parseInt(page) - 1) * parseInt(limit);
        const where = {};

        if (status) where.status = status;
        if (userId) where.userId = userId;
        if (startDate || endDate) {
            where.createdAt = {};
            if (startDate) where.createdAt.gte = new Date(startDate);
            if (endDate) where.createdAt.lte = new Date(endDate);
        }

        const [orders, total] = await Promise.all([
            prisma.order.findMany({
                where,
                include: {
                    user: {
                        select: { fullName: true, username: true }
                    },
                    seat: {
                        include: {
                            table: {
                                select: { tableNumber: true }
                            }
                        }
                    },
                    course: {
                        select: { name: true, price: true }
                    },
                    orderitem: {
                        include: {
                            menuitem: {
                                select: { name: true, price: true, imageUrl: true }
                            }
                        }
                    },
                    payment: {
                        select: { amount: true, method: true, status: true }
                    }
                },
                orderBy: { [sortBy]: sortOrder },
                skip,
                take: parseInt(limit)
            }),
            prisma.order.count({ where })
        ]);

        const ordersWithTotal = orders.map(order => {
            const itemsTotal = order.orderitem.reduce(
                (sum, item) => sum + Number(item.price) * Number(item.quantity),
                0
            );
            const courseTotal = order.course ? Number(order.course.price) : 0;
            const totalAmount = itemsTotal + courseTotal;

            return {
                id: order.id,
                orderNumber: order.orderNumber,
                status: order.status,
                notes: order.notes,
                hasCourse: order.hasCourse,
                createdAt: order.createdAt,
                user: order.user,
                seat: {
                    seatNumber: order.seat.seatNumber,
                    status: order.seat.status,
                    table: {
                        tableNumber: order.seat.table.tableNumber
                    }
                },
                course: order.course,
                orderitem: order.orderitem.map(item => ({
                    quantity: item.quantity,
                    price: item.price,
                    notes: item.notes,
                    status: item.status,
                    createdAt: item.createdAt,
                    menuitem: item.menuitem
                })),
                payment: order.payment,
                totalAmount: totalAmount.toString(),
                itemsCount: order.orderitem.length
            };
        });


        res.json({
            success: true,
            data: ordersWithTotal,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลออร์เดอร์',
            error: error.message
        });
    }
};


exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                user: {
                    select: { fullName: true }
                },
                seat: {
                    include: {
                        table: {
                            select: { tableNumber: true }
                        }
                    }
                },
                course: {
                    select: { name: true, price: true }
                },
                orderitem: {
                    include: {
                        menuitem: {
                            include: {
                                menucategory: true
                            }
                        }
                    },
                    orderBy: { createdAt: 'asc' }
                },
                payment: {
                    select: { amount: true, method: true, status: true }
                }
            }
        });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบออร์เดอร์ที่ระบุ'
            });
        }

        // คำนวณยอดรวม
        const itemsTotal = order.orderitem.reduce(
            (sum, item) => sum + Number(item.quantity) * Number(item.price),
            0
        );
        const courseTotal = order.course ? Number(order.course.price) : 0;
        const totalAmount = itemsTotal + courseTotal;


        // จัดรูปแบบข้อมูลให้ไม่มี id และ updatedAt
        const cleanedOrder = {
            id: order.id,
            orderNumber: order.orderNumber,
            status: order.status,
            notes: order.notes,
            hasCourse: order.hasCourse,
            createdAt: order.createdAt,
            user: order.user,
            seat: {
                seatNumber: order.seat.seatNumber,
                status: order.seat.status,
                table: {
                    tableNumber: order.seat.table.tableNumber
                }
            },
            course: order.course,
            orderitem: order.orderitem.map(item => ({
                quantity: item.quantity,
                price: item.price,
                notes: item.notes,
                status: item.status,
                createdAt: item.createdAt,
                menuitem: {
                    name: item.menuitem.name,
                    price: item.menuitem.price,
                    imageUrl: item.menuitem.imageUrl,
                    menucategory: {
                        name: item.menuitem.menucategory.name
                    }
                }
            })),
            payment: order.payment,
            totalAmount: totalAmount.toString(),
            itemsTotal: itemsTotal.toString(),
            courseTotal: courseTotal.toString(),
            itemsCount: order.orderitem.length
        };

        res.json({
            success: true,
            data: cleanedOrder
        });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลออร์เดอร์',
            error: error.message
        });
    }
};


exports.createOrder = async (req, res) => {
    try {
        const {
            userId,
            seatId,
            courseId,
            notes,
            orderItems = []
        } = req.body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!userId || !seatId) {
            return res.status(400).json({
                success: false,
                message: 'กรุณาระบุ userId และ seatId'
            });
        }

        // ตรวจสอบว่า seat และ user มีอยู่จริง
        const [seat, user] = await Promise.all([
            prisma.seat.findUnique({
                where: { id: seatId },
                include: { table: true }
            }),
            prisma.user.findUnique({
                where: { id: userId }
            })
        ]);

        if (!seat) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบที่นั่งที่ระบุ'
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบผู้ใช้ที่ระบุ'
            });
        }

        // ตรวจสอบ course หากมีการระบุ
        let course = null;
        if (courseId) {
            course = await prisma.course.findUnique({
                where: { id: courseId, isActive: true }
            });
            if (!course) {
                return res.status(404).json({
                    success: false,
                    message: 'ไม่พบ Course ที่ระบุ'
                });
            }
        }

        // สร้าง order number
        const orderCount = await prisma.order.count();
        const orderNumber = `ORD${Date.now()}${String(orderCount + 1).padStart(3, '0')}`;

        // เริ่ม transaction
        const result = await prisma.$transaction(async (tx) => {
            // สร้างออร์เดอร์
            const newOrder = await tx.order.create({
                data: {
                    orderNumber,
                    userId,
                    seatId,
                    courseId,
                    notes,
                    hasCourse: !!courseId,
                    status: 'PENDING'
                }
            });

            // สร้าง order items
            if (orderItems.length > 0) {
                // ตรวจสอบว่า menu items มีอยู่จริงและ active
                const menuItemIds = orderItems.map(item => item.menuItemId);
                const menuItems = await tx.menuitem.findMany({
                    where: {
                        id: { in: menuItemIds },
                        active: true
                    }
                });

                if (menuItems.length !== menuItemIds.length) {
                    throw new Error('พบรายการอาหารที่ไม่ถูกต้องหรือไม่มีในระบบ');
                }

                const orderItemsData = orderItems.map(item => {
                    const menuItem = menuItems.find(mi => mi.id === item.menuItemId);
                    return {
                        orderId: newOrder.id,
                        menuItemId: item.menuItemId,
                        quantity: item.quantity,
                        price: menuItem.price,
                        notes: item.notes || null,
                        status: 'PENDING'
                    };
                });

                await tx.orderitem.createMany({
                    data: orderItemsData
                });
            }

            // อัปเดตสถานะที่นั่ง
            await tx.seat.update({
                where: { id: seatId },
                data: { status: 'OCCUPIED' }
            });

            return newOrder;
        });

        // ดึงข้อมูลออร์เดอร์ที่สร้างแล้วพร้อมข้อมูลที่เกี่ยวข้อง
        const createdOrder = await prisma.order.findUnique({
            where: { id: result.id },
            include: {
                user: {
                    select: { id: true, fullName: true, username: true }
                },
                seat: {
                    include: { table: true }
                },
                course: true,
                orderitem: {
                    include: {
                        menuitem: true
                    }
                }
            }
        });

        res.status(201).json({
            success: true,
            message: 'สร้างออร์เดอร์สำเร็จ',
            data: createdOrder
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการสร้างออร์เดอร์',
            error: error.message
        });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { notes, orderItems = [] } = req.body;

        const existingOrder = await prisma.order.findUnique({
            where: { id },
            include: { orderitem: true }
        });

        if (!existingOrder) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบออร์เดอร์ที่ระบุ'
            });
        }

        if (['COMPLETED', 'CANCELLED'].includes(existingOrder.status)) {
            return res.status(400).json({
                success: false,
                message: 'ไม่สามารถแก้ไขออร์เดอร์ที่เสร็จสิ้นหรือยกเลิกแล้ว'
            });
        }

        await prisma.$transaction(async (tx) => {
            await tx.order.update({
                where: { id },
                data: {
                    notes,
                    updatedAt: new Date()
                }
            });

            if (orderItems.length > 0) {
                await tx.orderitem.deleteMany({
                    where: {
                        orderId: id,
                        status: 'PENDING'
                    }
                });

                const menuItemIds = orderItems.map(item => item.menuItemId);
                const menuItems = await tx.menuitem.findMany({
                    where: {
                        id: { in: menuItemIds },
                        active: true
                    }
                });

                if (menuItems.length !== menuItemIds.length) {
                    throw new Error('พบรายการอาหารที่ไม่ถูกต้องหรือไม่มีในระบบ');
                }

                const orderItemsData = orderItems.map(item => {
                    const menuItem = menuItems.find(mi => mi.id === item.menuItemId);
                    return {
                        orderId: id,
                        menuItemId: item.menuItemId,
                        quantity: item.quantity,
                        price: menuItem.price,
                        notes: item.notes || null,
                        status: 'PENDING'
                    };
                });

                await tx.orderitem.createMany({ data: orderItemsData });
            }
        });


        const minimalOrder = await prisma.order.findUnique({
            where: { id },
            select: {
                id: true,
                orderNumber: true,
                status: true,
                notes: true,
                orderitem: {
                    select: {
                        quantity: true,
                        price: true,
                        menuitem: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });

        res.json({
            success: true,
            message: 'อัปเดตออร์เดอร์สำเร็จ',
            data: minimalOrder
        });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตออร์เดอร์',
            error: error.message
        });
    }
};


exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, notes } = req.body;

        // ตรวจสอบสถานะที่ส่งมา
        const validStatuses = ['PENDING', 'PREPARING', 'SERVED', 'COMPLETED', 'CANCELLED'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'สถานะที่ระบุไม่ถูกต้อง'
            });
        }

        // ตรวจสอบว่าออร์เดอร์มีอยู่จริง
        const existingOrder = await prisma.order.findUnique({
            where: { id },
            include: {
                seat: true,
                orderitem: true
            }
        });

        if (!existingOrder) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบออร์เดอร์ที่ระบุ'
            });
        }

        const result = await prisma.$transaction(async (tx) => {
            // อัปเดตสถานะออร์เดอร์
            const updatedOrder = await tx.order.update({
                where: { id },
                data: {
                    status,
                    notes: notes || existingOrder.notes,
                    updatedAt: new Date()
                }
            });

            // หากออร์เดอร์เสร็จสิ้น ให้ตัดสต็อก
            if (status === 'COMPLETED') {
                await this.deductInventory(tx, existingOrder.orderitem);
            }

            // หากออร์เดอร์เสร็จสิ้นหรือยกเลิก ให้อัปเดตสถานะที่นั่ง
            if (['COMPLETED', 'CANCELLED'].includes(status)) {
                // ตรวจสอบว่ามีออร์เดอร์อื่นในที่นั่งเดียวกันที่ยังไม่เสร็จสิ้นหรือไม่
                const activeOrders = await tx.order.count({
                    where: {
                        seatId: existingOrder.seatId,
                        id: { not: id },
                        status: { notIn: ['COMPLETED', 'CANCELLED'] }
                    }
                });

                // หากไม่มีออร์เดอร์อื่นที่ยังใช้งานอยู่ ให้เปลี่ยนสถานะที่นั่งเป็นว่าง
                if (activeOrders === 0) {
                    await tx.seat.update({
                        where: { id: existingOrder.seatId },
                        data: { status: 'AVAILABLE' }
                    });
                }
            }

            return updatedOrder;
        });

        const { id: _, updatedAt, ...filteredOrder } = result;
        res.json({
            success: true,
            message: 'อัปเดตสถานะออร์เดอร์สำเร็จ',
            data: filteredOrder
        });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะออร์เดอร์',
            error: error.message
        });
    }
};

exports.cancelledOrderOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;

        // ตรวจสอบว่าออร์เดอร์มีอยู่จริง
        const existingOrder = await prisma.order.findUnique({
            where: { id },
            include: { seat: true }
        });

        if (!existingOrder) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบออร์เดอร์ที่ระบุ'
            });
        }

        // ตรวจสอบสถานะ - ไม่สามารถยกเลิกออร์เดอร์ที่เสร็จสิ้นแล้ว
        if (existingOrder.status === 'COMPLETED') {
            return res.status(400).json({
                success: false,
                message: 'ไม่สามารถยกเลิกออร์เดอร์ที่เสร็จสิ้นแล้ว'
            });
        }

        const result = await prisma.$transaction(async (tx) => {
            // อัปเดตสถานะออร์เดอร์เป็น CANCELLED
            const cancelledOrder = await tx.order.update({
                where: { id },
                data: {
                    status: 'CANCELLED',
                    notes: reason ? `ยกเลิก: ${reason}` : existingOrder.notes,
                    updatedAt: new Date()
                }
            });

            // อัปเดตสถานะ order items
            await tx.orderitem.updateMany({
                where: { orderId: id },
                data: { status: 'CANCELLED' }
            });

            // ตรวจสอบว่ามีออร์เดอร์อื่นในที่นั่งเดียวกันที่ยังไม่เสร็จสิ้นหรือไม่
            const activeOrders = await tx.order.count({
                where: {
                    seatId: existingOrder.seatId,
                    id: { not: id },
                    status: { notIn: ['COMPLETED', 'CANCELLED'] }
                }
            });

            // หากไม่มีออร์เดอร์อื่นที่ยังใช้งานอยู่ ให้เปลี่ยนสถานะที่นั่งเป็นว่าง
            if (activeOrders === 0) {
                await tx.seat.update({
                    where: { id: existingOrder.seatId },
                    data: { status: 'AVAILABLE' }
                });
            }

            return cancelledOrder;
        });
        const { id: _, updatedAt, ...filteredOrder } = result;
        res.json({
            success: true,
            message: 'ยกเลิกออร์เดอร์สำเร็จ',
            data: filteredOrder
        });
    } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการยกเลิกออร์เดอร์',
            error: error.message
        });
    }
};

exports.getOrdersByTableId = async (req, res) => {
    try {
        const { tableId } = req.params;
        const { includeCompleted = false } = req.query;

        // ตรวจสอบว่าโต๊ะมีอยู่จริง
        const table = await prisma.table.findUnique({
            where: { id: tableId },
            select: {
                id: true,
                tableNumber: true
            }
        });

        if (!table) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบโต๊ะที่ระบุ'
            });
        }

        const whereCondition = {
            seat: {
                tableId: tableId
            }
        };

        if (!includeCompleted) {
            whereCondition.status = {
                notIn: ['COMPLETED', 'CANCELLED']
            };
        }

        const orders = await prisma.order.findMany({
            where: whereCondition,
            include: {
                seat: {
                    select: {
                        seatNumber: true
                    }
                },
                course: {
                    select: {
                        price: true
                    }
                },
                orderitem: {
                    select: {
                        quantity: true,
                        price: true,
                        menuitem: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // จัดกลุ่มออร์เดอร์ตามที่นั่ง
        const ordersBySeat = orders.reduce((acc, order) => {
            const seatNumber = order.seat.seatNumber;
            if (!acc[seatNumber]) {
                acc[seatNumber] = {
                    seatNumber,
                    orders: []
                };
            }

            const itemsTotal = order.orderitem.reduce((sum, item) =>
                sum + Number(item.price) * Number(item.quantity), 0
            );
            const courseTotal = order.course ? Number(order.course.price) : 0;
            const totalAmount = itemsTotal + courseTotal;

            acc[seatNumber].orders.push({
                orderNumber: order.orderNumber,
                status: order.status,
                notes: order.notes || null,
                itemsTotal: itemsTotal.toString(),
                courseTotal: courseTotal.toString(),
                totalAmount: totalAmount.toString(),
                orderitem: order.orderitem.map(item => ({
                    menuName: item.menuitem.name,
                    quantity: item.quantity,
                    price: item.price
                }))
            });

            return acc;
        }, {});

        res.json({
            success: true,
            data: {
                table,
                ordersBySeat
            }
        });
    } catch (error) {
        console.error('Error fetching orders by table:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลออร์เดอร์ของโต๊ะ',
            error: error.message
        });
    }
};





exports.getOrdersBySeatId = async (req, res) => {
    try {
        const { seatId } = req.params;
        const { includeCompleted = false } = req.query;

        // ตรวจสอบว่าที่นั่งมีอยู่จริง
        const seat = await prisma.seat.findUnique({
            where: { id: seatId },
            select: {
                seatNumber: true,
                status: true,
                table: {
                    select: {
                        tableNumber: true
                    }
                }
            }
        });

        if (!seat) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบที่นั่งที่ระบุ'
            });
        }

        const whereCondition = { seatId };

        if (!includeCompleted) {
            whereCondition.status = {
                notIn: ['COMPLETED', 'CANCELLED']
            };
        }

        const orders = await prisma.order.findMany({
            where: whereCondition,
            include: {
                course: {
                    select: { name: true, price: true }
                },
                orderitem: {
                    select: {
                        quantity: true,
                        price: true,
                        menuitem: {
                            select: {
                                name: true,
                                menucategory: {
                                    select: { name: true }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        const ordersWithTotal = orders.map(order => {
            const itemsTotal = order.orderitem.reduce(
                (sum, item) => sum + Number(item.price) * item.quantity,
                0
            );
            const courseTotal = order.course ? Number(order.course.price) : 0;
            const totalAmount = itemsTotal + courseTotal;

            return {
                id: order.id,
                orderNumber: order.orderNumber,
                status: order.status,
                notes: order.notes,
                hasCourse: order.hasCourse,
                course: order.course ? {
                    name: order.course.name,
                    price: order.course.price
                } : null,
                orderItems: order.orderitem.map(item => ({
                    menuName: item.menuitem.name,
                    category: item.menuitem.menucategory.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                itemsTotal,
                courseTotal,
                totalAmount,
                createdAt: order.createdAt
            };
        });

        const grandTotal = ordersWithTotal.reduce((sum, order) => sum + order.totalAmount, 0);

        res.json({
            success: true,
            data: {
                seat: {
                    seatNumber: seat.seatNumber,
                    status: seat.status,
                    tableNumber: seat.table.tableNumber
                },
                orders: ordersWithTotal,
                summary: {
                    totalOrders: ordersWithTotal.length,
                    grandTotal
                }
            }
        });
    } catch (error) {
        console.error('Error fetching orders by seat:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลออร์เดอร์ของที่นั่ง',
            error: error.message
        });
    }
};





