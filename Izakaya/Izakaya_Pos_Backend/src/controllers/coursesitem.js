const prisma = require('../config/prisma');

exports.getAllCoursesItem = async (req, res) => {
    try {
        const { courseId } = req.params;

        // ตรวจสอบว่า Course มีอยู่จริงหรือไม่
        const course = await prisma.course.findUnique({
            where: { id: courseId }
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // ดึงรายการอาหารใน Course พร้อมข้อมูลเมนู
        const courseItems = await prisma.courseitem.findMany({
            where: { courseId },
            include: {
                menuitem: {
                    include: {
                        menucategory: true
                    }
                }
            },
            orderBy: {
                menuitem: {
                    name: 'asc'
                }
            }
        });

        return res.status(200).json({
            success: true,
            data: {
                course: {

                    name: course.name,
                    description: course.description,
                    price: course.price
                },
                items: courseItems.map(item => ({
                    quantity: item.quantity,
                    menuItem: {
                        name: item.menuitem.name,
                        description: item.menuitem.description,
                        price: item.menuitem.price,
                        imageUrl: item.menuitem.imageUrl,
                        active: item.menuitem.active,
                        category: {
                            name: item.menuitem.menucategory.name
                        }
                    }
                }))
            }
        });

    } catch (error) {
        console.error('Error fetching course items:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.addCourseItem = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { menuItemId, quantity } = req.body;

        // Validation
        if (!menuItemId || !quantity) {
            return res.status(400).json({
                success: false,
                message: 'menuItemId and quantity are required'
            });
        }

        if (quantity <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Quantity must be greater than 0'
            });
        }

        // ตรวจสอบว่า Course มีอยู่จริงหรือไม่
        const course = await prisma.course.findUnique({
            where: { id: courseId }
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // ตรวจสอบว่า MenuItem มีอยู่จริงและเปิดใช้งานหรือไม่
        const menuItem = await prisma.menuitem.findUnique({
            where: { id: menuItemId }
        });

        if (!menuItem) {
            return res.status(404).json({
                success: false,
                message: 'Menu item not found'
            });
        }

        if (!menuItem.active) {
            return res.status(400).json({
                success: false,
                message: 'Menu item is not active'
            });
        }

        // ตรวจสอบว่ามีรายการนี้ใน Course แล้วหรือไม่
        const existingItem = await prisma.courseitem.findUnique({
            where: {
                courseId_menuItemId: {
                    courseId,
                    menuItemId
                }
            }
        });

        if (existingItem) {
            return res.status(409).json({
                success: false,
                message: 'Menu item already exists in this course'
            });
        }

        // เพิ่มรายการอาหารเข้า Course
        const courseItem = await prisma.courseitem.create({
            data: {
                courseId,
                menuItemId,
                quantity: parseInt(quantity)
            },
            include: {
                menuitem: {
                    include: {
                        menucategory: true
                    }
                }
            }
        });

        return res.status(201).json({
            success: true,
            message: 'Course item added successfully',
            data: {
                quantity: courseItem.quantity,
                menuItem: {
                    name: courseItem.menuitem.name,
                    description: courseItem.menuitem.description,
                    price: courseItem.menuitem.price,
                    imageUrl: courseItem.menuitem.imageUrl,
                    category: {
                        name: courseItem.menuitem.menucategory.name
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error adding course item:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.updateCourseItem = async (req, res) => {
    try {
        const { courseId, menuItemId } = req.params;
        const { quantity } = req.body;

        // Validation
        if (!quantity) {
            return res.status(400).json({
                success: false,
                message: 'Quantity is required'
            });
        }

        if (quantity <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Quantity must be greater than 0'
            });
        }

        // ตรวจสอบว่า CourseItem มีอยู่จริงหรือไม่
        const existingItem = await prisma.courseitem.findUnique({
            where: {
                courseId_menuItemId: {
                    courseId,
                    menuItemId
                }
            },
            include: {
                menuitem: {
                    include: {
                        menucategory: true
                    }
                }
            }
        });

        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: 'Course item not found'
            });
        }

        // อัปเดต quantity
        const updatedItem = await prisma.courseitem.update({
            where: {
                courseId_menuItemId: {
                    courseId,
                    menuItemId
                }
            },
            data: {
                quantity: parseInt(quantity)
            },
            include: {
                menuitem: {
                    include: {
                        menucategory: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Course item updated successfully',
            data: {
                quantity: updatedItem.quantity,
                menuItem: {
                    name: updatedItem.menuitem.name,
                    description: updatedItem.menuitem.description,
                    price: updatedItem.menuitem.price,
                    imageUrl: updatedItem.menuitem.imageUrl,
                    category: {
                        name: updatedItem.menuitem.menucategory.name
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error updating course item:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.deleteCourseItem = async (req, res) => {
    try {
        const { courseId, menuItemId } = req.params;

        // ตรวจสอบว่า CourseItem มีอยู่จริงหรือไม่
        const existingItem = await prisma.courseitem.findUnique({
            where: {
                courseId_menuItemId: {
                    courseId,
                    menuItemId
                }
            }
        });

        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: 'Course item not found'
            });
        }

        // ตรวจสอบว่ามี Order ที่ใช้ Course นี้อยู่หรือไม่ (ถ้ามี ไม่ควรลบ)
        const activeOrders = await prisma.order.findMany({
            where: {
                courseId,
                status: {
                    in: ['PENDING', 'PREPARING', 'SERVED']
                }
            }
        });

        if (activeOrders.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete course item. There are active orders using this course.'
            });
        }

        // ลบ CourseItem
        await prisma.courseitem.delete({
            where: {
                courseId_menuItemId: {
                    courseId,
                    menuItemId
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Course item deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting course item:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.getAvailableMenuItems = async (req, res) => {
    try {
        const { courseId } = req.params;

        // ตรวจสอบว่า Course มีอยู่จริงหรือไม่
        const course = await prisma.course.findUnique({
            where: { id: courseId }
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // ดึงรายการเมนูที่ยังไม่ได้เพิ่มใน Course และเปิดใช้งาน
        const availableMenuItems = await prisma.menuitem.findMany({
            where: {
                active: true,
                NOT: {
                    courseitem: {
                        some: {
                            courseId
                        }
                    }
                }
            },
            include: {
                menucategory: true
            },
            orderBy: [
                { menucategory: { displayOrder: 'asc' } },
                { name: 'asc' }
            ]
        });

        return res.status(200).json({
            success: true,
            data: availableMenuItems.map(item => ({
                name: item.name,
                description: item.description,
                price: item.price,
                imageUrl: item.imageUrl,
                category: {
                    name: item.menucategory.name
                }
            }))
        });

    } catch (error) {
        console.error('Error fetching available menu items:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


