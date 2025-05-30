const prisma = require('../config/prisma');

exports.getAllMenuCategories = async (req, res) => {
    try {
        const categories = await prisma.menucategory.findMany({
            orderBy: {
                displayOrder: 'asc'
            },
            where: {
                active: true
            },
            select: {
                id: true,
                name: true,
                displayOrder: true,
                menuitem: {
                    where: {
                        active: true
                    },
                    select: {
                        id: true,
                        name: true,
                        price: true
                    }
                }
            }
        });

        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error('Error fetching menu categories:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลหมวดหมู่เมนู',
            error: error.message
        });
    }
};


exports.getMenuCategoryByid = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await prisma.menucategory.findUnique({
            where: {
                id: id
            },
            include: {
                menuitem: {
                    where: {
                        active: true
                    },
                    orderBy: {
                        name: 'asc'
                    }
                }
            }
        });

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบหมวดหมู่เมนูที่ระบุ'
            });
        }

        res.status(200).json({
            success: true,
            data: {
                id: category.id,
                name: category.name,
                displayOrder: category.displayOrder,
                menuitem: category.menuitem.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price
                }))
            },
            message: 'ดึงข้อมูลหมวดหมู่เมนูสำเร็จ'
        });
    } catch (error) {
        console.error('Error fetching menu category by ID:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลหมวดหมู่เมนู',
            error: error.message
        });
    }
};

exports.addMenuCategory = async (req, res) => {
    try {
        const { name, description, displayOrder, active = true } = req.body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'กรุณาระบุชื่อหมวดหมู่'
            });
        }

        // ตรวจสอบว่าชื่อหมวดหมู่ซ้ำหรือไม่
        const existingCategory = await prisma.menucategory.findFirst({
            where: {
                name: name
            }
        });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: 'ชื่อหมวดหมู่นี้มีอยู่แล้ว'
            });
        }

        // หาลำดับการแสดงผลสูงสุด
        let finalDisplayOrder = displayOrder;
        if (!displayOrder) {
            const maxOrder = await prisma.menucategory.aggregate({
                _max: {
                    displayOrder: true
                }
            });
            finalDisplayOrder = (maxOrder._max.displayOrder || 0) + 1;
        }

        const newCategory = await prisma.menucategory.create({
            data: {
                name,
                description,
                displayOrder: finalDisplayOrder,
                active
            }
        });

        res.status(201).json({
            success: true,
            data: newCategory,
            message: 'สร้างหมวดหมู่เมนูสำเร็จ'
        });
    } catch (error) {
        console.error('Error creating menu category:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการสร้างหมวดหมู่เมนู',
            error: error.message
        });
    }
};

exports.updateMenuCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, displayOrder, active } = req.body;

        // ตรวจสอบว่าหมวดหมู่มีอยู่หรือไม่
        const existingCategory = await prisma.menucategory.findUnique({
            where: { id }
        });

        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบหมวดหมู่เมนูที่ระบุ'
            });
        }

        // ตรวจสอบชื่อหมวดหมู่ซ้ำ (ยกเว้นตัวเอง)
        if (name && name !== existingCategory.name) {
            const duplicateCategory = await prisma.menucategory.findFirst({
                where: {
                    name: name,
                    id: {
                        not: id
                    }
                }
            });

            if (duplicateCategory) {
                return res.status(400).json({
                    success: false,
                    message: 'ชื่อหมวดหมู่นี้มีอยู่แล้ว'
                });
            }
        }

        const updatedCategory = await prisma.menucategory.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(description !== undefined && { description }),
                ...(displayOrder !== undefined && { displayOrder }),
                ...(active !== undefined && { active })
            }
        });

        res.status(200).json({
            success: true,
            data: updatedCategory,
            message: 'อัปเดตหมวดหมู่เมนูสำเร็จ'
        });
    } catch (error) {
        console.error('Error updating menu category:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตหมวดหมู่เมนู',
            error: error.message
        });
    }
};

exports.updateCategoriesOrder = async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const { categories } = req.body;

        if (!categories || !Array.isArray(categories)) {
            return res.status(400).json({
                success: false,
                message: 'ข้อมูลลำดับหมวดหมู่ไม่ถูกต้อง'
            });
        }

        console.log('Categories to update:', categories);

        // ตรวจสอบว่าทุก ID มีอยู่ในฐานข้อมูลหรือไม่
        const categoryIds = categories.map(cat => cat.id);
        console.log('Category IDs:', categoryIds);

        const existingCategories = await prisma.menucategory.findMany({
            where: {
                id: {
                    in: categoryIds
                }
            },
            select: {
                id: true,
                name: true
            }
        });

        console.log('Existing categories:', existingCategories);

        const existingIds = existingCategories.map(cat => cat.id);
        const missingIds = categoryIds.filter(id => !existingIds.includes(id));

        console.log('Existing IDs:', existingIds);
        console.log('Missing IDs:', missingIds);

        if (missingIds.length > 0) {
            return res.status(404).json({
                success: false,
                message: `ไม่พบหมวดหมู่เมนูที่ระบุ: ${missingIds.join(', ')}`,
                missingIds: missingIds,
                debug: {
                    requestedIds: categoryIds,
                    existingIds: existingIds,
                    missingIds: missingIds
                }
            });
        }

        // ใช้ transaction เพื่ออัปเดตลำดับทั้งหมด
        const updatePromises = categories.map((category, index) =>
            prisma.menucategory.update({
                where: { id: category.id },
                data: { displayOrder: index + 1 }
            })
        );

        await prisma.$transaction(updatePromises);

        res.status(200).json({
            success: true,
            message: 'อัปเดตลำดับหมวดหมู่เมนูสำเร็จ'
        });
    } catch (error) {
        console.error('Error updating categories order:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตลำดับหมวดหมู่เมนู',
            error: error.message,
            stack: error.stack
        });
    }
};
exports.deleteMenuCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // ตรวจสอบว่าหมวดหมู่มีอยู่หรือไม่
        const existingCategory = await prisma.menucategory.findUnique({
            where: { id },
            include: {
                menuitem: true
            }
        });

        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบหมวดหมู่เมนูที่ระบุ'
            });
        }

        // ตรวจสอบว่ามีเมนูในหมวดหมู่นี้หรือไม่
        if (existingCategory.menuitem.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'ไม่สามารถลบหมวดหมู่ที่มีรายการเมนูได้ กรุณาลบหรือย้ายรายการเมนูก่อน'
            });
        }

        await prisma.menucategory.delete({
            where: { id }
        });

        res.status(200).json({
            success: true,
            message: 'ลบหมวดหมู่เมนูสำเร็จ'
        });
    } catch (error) {
        console.error('Error deleting menu category:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการลบหมวดหมู่เมนู',
            error: error.message
        });
    }
};


