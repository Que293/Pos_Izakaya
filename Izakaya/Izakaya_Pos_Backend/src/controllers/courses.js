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
        res.send('Hello from getCourseByid')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}


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
        res.send('Hello from updateCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        res.send('Hello from deleteCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.activateCourse = async (req, res) => {
    try {
        res.send('Hello from activateCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}