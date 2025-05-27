const prisma = require('../config/prisma');

exports.getAllCourses = async (req, res) => {
    try {
        const { includeInactive = false } = req.query;

        const whereCondition = includeInactive === 'true' ? {} : { isActive: true };

        const courses = await prisma.course.findMany({
            where: whereCondition,
            include: {
                courseitem: {
                    include: {
                        menuitem: {
                            select: {
                                name: true,
                                price: true,
                                imageUrl: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });


        const filteredCourses = courses.map(course => ({
            name: course.name,
            description: course.description,
            price: course.price,
            isActive: course.isActive,
            courseitem: course.courseitem.map(item => ({
                quantity: item.quantity,
                menuitem: item.menuitem
            }))
        }));

        res.status(200).json({
            success: true,
            data: filteredCourses,
            message: 'Courses retrieved successfully'
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


exports.getCourseByid = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await prisma.course.findUnique({
            where: { id },
            include: {
                courseitem: {
                    include: {
                        menuitem: {
                            include: {
                                menucategory: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        menuitem: {
                            name: 'asc'
                        }
                    }
                }
            }
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // กรองข้อมูลไม่ให้แสดง id, createdAt, updatedAt
        const filteredCourse = {
            name: course.name,
            description: course.description,
            price: course.price,
            isActive: course.isActive,
            courseitem: course.courseitem.map(item => ({
                quantity: item.quantity,
                menuitem: {
                    name: item.menuitem.name,
                    price: item.menuitem.price,
                    imageUrl: item.menuitem.imageUrl,
                    menucategory: {
                        name: item.menuitem.menucategory.name
                    }
                }
            }))
        };

        res.status(200).json({
            success: true,
            data: filteredCourse,
            message: 'Course retrieved successfully'
        });

    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};



exports.addCourse = async (req, res) => {
    try {
        const { name, description, price, menuItems = [] } = req.body;

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Name and price are required'
            });
        }

        if (price <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Price must be greater than 0'
            });
        }

        const course = await prisma.$transaction(async (tx) => {
            const newCourse = await tx.course.create({
                data: {
                    name,
                    description,
                    price: parseFloat(price),
                    updatedAt: new Date()
                }
            });

            if (menuItems.length > 0) {
                const courseItemsData = menuItems.map(item => ({
                    courseId: newCourse.id,
                    menuItemId: item.menuItemId,
                    quantity: item.quantity || 1
                }));

                await tx.courseitem.createMany({
                    data: courseItemsData
                });
            }

            return await tx.course.findUnique({
                where: { id: newCourse.id },
                include: {
                    courseitem: {
                        include: {
                            menuitem: {
                                select: {
                                    name: true,
                                    price: true,
                                    imageUrl: true
                                }
                            }
                        }
                    }
                }
            });
        });

        res.status(201).json({
            success: true,
            data: {
                name: course.name,
                description: course.description,
                price: course.price,
                courseitem: course.courseitem.map(item => ({
                    quantity: item.quantity,
                    menuitem: {
                        name: item.menuitem.name,
                        price: item.menuitem.price,
                        imageUrl: item.menuitem.imageUrl
                    }
                }))
            },
            message: 'Course created successfully'
        });

    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, menuItems = [] } = req.body;

        // Check if course exists
        const existingCourse = await prisma.course.findUnique({ where: { id } });
        if (!existingCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        // Validation
        if (price && price <= 0) {
            return res.status(400).json({ success: false, message: 'Price must be greater than 0' });
        }

        const course = await prisma.$transaction(async (tx) => {
            // Update course
            const updateData = { updatedAt: new Date() };
            if (name) updateData.name = name;
            if (description !== undefined) updateData.description = description;
            if (price) updateData.price = parseFloat(price);

            await tx.course.update({ where: { id }, data: updateData });

            // Update course items
            await tx.courseitem.deleteMany({ where: { courseId: id } });

            if (menuItems.length > 0) {
                const { ulid } = require('ulid');
                const seen = new Set();
                const courseItemsData = [];

                for (const item of menuItems) {
                    const key = `${item.menuItemId}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        courseItemsData.push({
                            id: ulid(),
                            courseId: id,
                            menuItemId: item.menuItemId,
                            quantity: item.quantity || 1
                        });
                    }
                }

                if (courseItemsData.length > 0) {
                    await tx.courseitem.createMany({ data: courseItemsData });
                }
            }

            // Return updated course
            return await tx.course.findUnique({
                where: { id },
                include: {
                    courseitem: {
                        include: {
                            menuitem: {
                                select: {
                                    name: true,
                                    price: true,
                                    imageUrl: true
                                }
                            }
                        }
                    }
                }
            });
        });

        // Filter fields in response
        const filteredCourse = {
            name: course.name,
            description: course.description,
            price: course.price,
            isActive: course.isActive,
            courseitem: course.courseitem.map(item => ({
                quantity: item.quantity,
                menuitem: item.menuitem
            }))
        };

        res.status(200).json({
            success: true,
            data: filteredCourse,
            message: 'Course updated successfully'
        });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if course exists
        const existingCourse = await prisma.course.findUnique({
            where: { id },
            include: {
                order: true
            }
        });

        if (!existingCourse) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // Check if course has associated orders
        if (existingCourse.order && existingCourse.order.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete course that has associated orders. Consider deactivating instead.'
            });
        }

        // Delete course (course items will be deleted automatically due to CASCADE)
        await prisma.course.delete({
            where: { id }
        });

        res.status(200).json({
            success: true,
            message: 'Course deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}

exports.activateCourse = async (req, res) => {
    try {

        const { id } = req.params;
        const { isActive } = req.body;

        if (typeof isActive !== 'boolean') {
            return res.status(400).json({
                success: false,
                message: 'isActive must be a boolean (true or false)'
            });
        }

        const course = await prisma.course.update({
            where: { id },
            data: {
                isActive,
                updatedAt: new Date()
            },
            include: {
                courseitem: {
                    include: {
                        menuitem: {
                            select: {
                                name: true,
                                price: true,
                                imageUrl: true
                            }
                        }
                    }
                }
            }
        });

        const filteredCourse = {
            name: course.name,
            description: course.description,
            price: course.price,
            isActive: course.isActive,
            courseitem: course.courseitem.map(item => ({
                quantity: item.quantity,
                menuitem: item.menuitem
            }))
        };

        res.status(200).json({
            success: true,
            data: filteredCourse,
            message: `Course ${isActive ? 'activated' : 'deactivated'} successfully`
        });
    } catch (error) {
        console.error('Error toggling course active status:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}