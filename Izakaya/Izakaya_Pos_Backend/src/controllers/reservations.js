const prisma = require('../config/prisma');

exports.getAllReservations = async (req, res) => {
    try {
        const { status, date, limit = 50, offset = 0 } = req.query;

        // สร้าง filter conditions
        const where = {};

        if (status) {
            where.status = status;
        }

        if (date) {
            const startDate = new Date(date);
            const endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1);

            where.reservationTime = {
                gte: startDate,
                lt: endDate
            };
        }

        const reservations = await prisma.reservation.findMany({
            where,
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            },
            orderBy: {
                reservationTime: 'asc'
            },
            take: parseInt(limit),
            skip: parseInt(offset)
        });



        // นับจำนวนการจองทั้งหมดที่ตรงกับ filter conditions
        const total = await prisma.reservation.count({ where });


        // กรองข้อมูลที่ต้องการส่งกลับ
        const sanitizedReservations = reservations.map(reservation => ({
            customerName: reservation.customerName,
            phoneNumber: reservation.phoneNumber,
            partySize: reservation.partySize,
            reservationTime: reservation.reservationTime,
            notes: reservation.notes,
            status: reservation.status,
            createdAt: reservation.createdAt,
            table: {
                tableNumber: reservation.table.tableNumber,
                capacity: reservation.table.capacity,
                status: reservation.table.status
            }
        }));

        res.status(200).json({
            success: true,
            data: sanitizedReservations,
            pagination: {
                total,
                limit: parseInt(limit),
                offset: parseInt(offset),
                hasMore: total > parseInt(offset) + parseInt(limit)
            }
        });
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการจอง',
            error: error.message
        });
    }
}


exports.getReservationByid = async (req, res) => {
    try {
        const { id } = req.params;

        const reservation = await prisma.reservation.findUnique({
            where: { id },
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            }
        });

        if (!reservation) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบข้อมูลการจองที่ระบุ'
            });
        }

        const sanitizedReservation = {
            customerName: reservation.customerName,
            phoneNumber: reservation.phoneNumber,
            partySize: reservation.partySize,
            reservationTime: reservation.reservationTime,
            notes: reservation.notes,
            status: reservation.status,
            createdAt: reservation.createdAt,
            table: {
                tableNumber: reservation.table.tableNumber,
                capacity: reservation.table.capacity,
                status: reservation.table.status
            }
        };

        res.status(200).json({
            success: true,
            data: sanitizedReservation
        });
    } catch (error) {
        console.error('Error fetching reservation by ID:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการจอง',
            error: error.message
        });
    }
}

exports.addReservation = async (req, res) => {
    try {
        const {
            customerName,
            phoneNumber,
            partySize,
            reservationTime,
            notes,
            tableId
        } = req.body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!customerName || !phoneNumber || !partySize || !reservationTime || !tableId) {
            return res.status(400).json({
                success: false,
                message: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน'
            });
        }

        // ตรวจสอบว่าเวลาที่ส่งมาเป็นวันที่และเวลาที่ถูกต้อง
        const validDate = new Date(reservationTime);
        if (isNaN(validDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: 'รูปแบบเวลาการจองไม่ถูกต้อง'
            });
        }

        // ตรวจสอบว่าโต๊ะมีอยู่จริง
        const table = await prisma.table.findUnique({
            where: { id: tableId }
        });

        if (!table) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบโต๊ะที่ระบุ'
            });
        }

        // ตรวจสอบว่าโต๊ะมีความจุเพียงพอ
        if (partySize > table.capacity) {
            return res.status(400).json({
                success: false,
                message: `โต๊ะนี้รองรับได้สูงสุด ${table.capacity} คน แต่ต้องการจอง ${partySize} คน`
            });
        }

        // ตรวจสอบว่าโต๊ะว่างในช่วงเวลาที่จอง (±2 ชั่วโมง)
        const startTime = new Date(validDate.getTime() - 2 * 60 * 60 * 1000);
        const endTime = new Date(validDate.getTime() + 2 * 60 * 60 * 1000);

        const conflictReservation = await prisma.reservation.findFirst({
            where: {
                tableId,
                status: {
                    in: ['CONFIRMED', 'PENDING']
                },
                reservationTime: {
                    gte: startTime,
                    lte: endTime
                }
            }
        });

        if (conflictReservation) {
            return res.status(409).json({
                success: false,
                message: 'โต๊ะนี้มีการจองในช่วงเวลาที่ใกล้เคียงแล้ว'
            });
        }

        // สร้าง ID ใหม่ (ถ้าไม่ใช้ auto-increment)
        const reservationId = `res_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const newReservation = await prisma.reservation.create({
            data: {
                id: reservationId,
                customerName,
                phoneNumber,
                partySize,
                reservationTime: validDate,
                notes: notes || null,
                status: 'PENDING',
                tableId
            },
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            }
        });

        // *ยกเลิกการเปลี่ยนสถานะโต๊ะและที่นั่ง*

        const sanitizedReservation = {
            customerName: newReservation.customerName,
            phoneNumber: newReservation.phoneNumber,
            partySize: newReservation.partySize,
            reservationTime: newReservation.reservationTime,
            notes: newReservation.notes,
            status: newReservation.status,
            createdAt: newReservation.createdAt,
            table: {
                tableNumber: newReservation.table.tableNumber,
                capacity: newReservation.table.capacity,
                status: newReservation.table.status
            }
        };

        res.status(201).json({
            success: true,
            message: 'สร้างการจองเรียบร้อยแล้ว',
            data: sanitizedReservation
        });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการสร้างการจอง',
            error: error.message
        });
    }
};


exports.updateReservation = async (req, res) => {
    try {

        const { id } = req.params;
        const {
            customerName,
            phoneNumber,
            partySize,
            reservationTime,
            notes,
            status,
            tableId
        } = req.body;

        // ตรวจสอบว่าการจองมีอยู่จริง
        const existingReservation = await prisma.reservation.findUnique({
            where: { id },
            include: { table: true }
        });

        if (!existingReservation) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบข้อมูลการจองที่ระบุ'
            });
        }

        // ตรวจสอบสถานะที่ถูกต้อง
        const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED', 'NO_SHOW'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'สถานะการจองไม่ถูกต้อง'
            });
        }

        // ถ้าเปลี่ยนโต๊ะ ต้องตรวจสอบโต๊ะใหม่
        if (tableId && tableId !== existingReservation.tableId) {
            const newTable = await prisma.table.findUnique({
                where: { id: tableId }
            });

            if (!newTable) {
                return res.status(404).json({
                    success: false,
                    message: 'ไม่พบโต๊ะที่ระบุ'
                });
            }

            // ตรวจสอบความจุของโต๊ะใหม่
            const newPartySize = partySize || existingReservation.partySize;
            if (newPartySize > newTable.capacity) {
                return res.status(400).json({
                    success: false,
                    message: `โต๊ะใหม่รองรับได้สูงสุด ${newTable.capacity} คน`
                });
            }
        }

        // ถ้าเปลี่ยนเวลา ต้องตรวจสอบความขัดแย้ง
        if (reservationTime) {
            const newReservationDate = new Date(reservationTime);
            const startTime = new Date(newReservationDate.getTime() - 2 * 60 * 60 * 1000);
            const endTime = new Date(newReservationDate.getTime() + 2 * 60 * 60 * 1000);

            const conflictReservation = await prisma.reservation.findFirst({
                where: {
                    id: { not: id }, // ยกเว้นการจองปัจจุบัน
                    tableId: tableId || existingReservation.tableId,
                    status: {
                        in: ['CONFIRMED', 'PENDING']
                    },
                    reservationTime: {
                        gte: startTime,
                        lte: endTime
                    }
                }
            });

            if (conflictReservation) {
                return res.status(409).json({
                    success: false,
                    message: 'มีการจองในช่วงเวลาที่ใกล้เคียงแล้ว'
                });
            }
        }

        // สร้าง update data
        const updateData = {};
        if (customerName) updateData.customerName = customerName;
        if (phoneNumber) updateData.phoneNumber = phoneNumber;
        if (partySize) updateData.partySize = partySize;
        if (reservationTime) updateData.reservationTime = new Date(reservationTime);
        if (notes !== undefined) updateData.notes = notes;
        if (status) updateData.status = status;
        if (tableId) updateData.tableId = tableId;

        const updatedReservation = await prisma.reservation.update({
            where: { id },
            data: updateData,
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            }
        });

        const sanitizedReservation = {
            customerName: updatedReservation.customerName,
            phoneNumber: updatedReservation.phoneNumber,
            partySize: updatedReservation.partySize,
            reservationTime: updatedReservation.reservationTime,
            notes: updatedReservation.notes,
            status: updatedReservation.status,
            updatedAt: updatedReservation.updatedAt,
            table: {
                tableNumber: updatedReservation.table.tableNumber,
                capacity: updatedReservation.table.capacity,
                status: updatedReservation.table.status
            }
        };
        res.status(200).json({
            success: true,
            message: 'อัปเดตข้อมูลการจองเรียบร้อยแล้ว',
            data: sanitizedReservation
        });
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูลการจอง',
            error: error.message
        });
    }
}

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;

        // ตรวจสอบว่าการจองมีอยู่จริง
        const existingReservation = await prisma.reservation.findUnique({
            where: { id },
            include: {
                table: true
            }
        });

        if (!existingReservation) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบข้อมูลการจองที่ระบุ'
            });
        }

        // ตรวจสอบว่าสามารถยกเลิกได้หรือไม่
        if (existingReservation.status === 'COMPLETED') {
            return res.status(400).json({
                success: false,
                message: 'ไม่สามารถยกเลิกการจองที่เสร็จสิ้นแล้ว'
            });
        }

        // อัปเดตสถานะเป็น CANCELLED แทนการลบจริง
        const cancelledReservation = await prisma.reservation.update({
            where: { id },
            data: {
                status: 'CANCELLED'
            },
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            }
        });

        // ตรวจสอบว่ามีการจองอื่นที่ยัง ACTIVE สำหรับโต๊ะนี้อยู่ไหม
        const activeReservation = await prisma.reservation.findFirst({
            where: {
                tableId: cancelledReservation.table.id,
                status: { in: ['PENDING', 'CONFIRMED'] }
            }
        });

        // ถ้าไม่มี → เปลี่ยนสถานะโต๊ะเป็น AVAILABLE
        if (!activeReservation) {
            await prisma.table.update({
                where: { id: cancelledReservation.table.id },
                data: { status: 'AVAILABLE' }
            });
        }

        res.status(200).json({
            success: true,
            message: 'ยกเลิกการจองเรียบร้อยแล้ว',
            data: cancelledReservation
        });

    } catch (error) {
        console.error('Error cancelling reservation:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการยกเลิกการจอง',
            error: error.message
        });
    }
};


exports.getReservationByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const { status } = req.query;

        // ตรวจสอบรูปแบบวันที่
        const targetDate = new Date(date);
        if (isNaN(targetDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: 'รูปแบบวันที่ไม่ถูกต้อง'
            });
        }

        // กำหนดช่วงเวลาของวันที่ระบุ
        const startDate = new Date(targetDate);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(targetDate);
        endDate.setHours(23, 59, 59, 999);

        // สร้าง filter conditions
        const where = {
            reservationTime: {
                gte: startDate,
                lte: endDate
            }
        };

        if (status) {
            where.status = status;
        }

        const reservations = await prisma.reservation.findMany({
            where,
            select: {
                customerName: true,
                phoneNumber: true,
                partySize: true,
                reservationTime: true,
                notes: true,
                status: true,
                createdAt: true,
                table: {
                    select: {
                        tableNumber: true,
                        capacity: true,
                        status: true
                    }
                }
            },
            orderBy: {
                reservationTime: 'asc'
            }
        });


        res.status(200).json({
            success: true,
            data: reservations,
            summary: {
                date: date,
                total: reservations.length,
                byStatus: reservations.reduce((acc, reservation) => {
                    acc[reservation.status] = (acc[reservation.status] || 0) + 1;
                    return acc;
                }, {})
            }
        });
    } catch (error) {
        console.error('Error fetching reservations by date:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการจองตามวันที่',
            error: error.message
        });
    }
}

exports.getReservationByTableId = async (req, res) => {
    try {
        const { tableId } = req.params;
        const { status, startDate, endDate, limit = 20, offset = 0 } = req.query;

        // ตรวจสอบว่าโต๊ะมีอยู่จริง
        const table = await prisma.table.findUnique({
            where: { id: tableId }
        });

        if (!table) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบโต๊ะที่ระบุ'
            });
        }

        // สร้าง filter conditions
        const where = { tableId };

        if (status) {
            where.status = status;
        }

        if (startDate && endDate) {
            where.reservationTime = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            };
        } else if (startDate) {
            where.reservationTime = {
                gte: new Date(startDate)
            };
        } else if (endDate) {
            where.reservationTime = {
                lte: new Date(endDate)
            };
        }

        const reservations = await prisma.reservation.findMany({
            where,
            select: {
                customerName: true,
                phoneNumber: true,
                partySize: true,
                reservationTime: true,
                notes: true,
                status: true,
                createdAt: true
            },
            orderBy: {
                reservationTime: 'desc'
            },
            take: parseInt(limit),
            skip: parseInt(offset)
        });


        const total = await prisma.reservation.count({ where });

        res.status(200).json({
            success: true,
            data: reservations,
            table: {

                tableNumber: table.tableNumber,
                capacity: table.capacity,
                status: table.status
            },
            pagination: {
                total,
                limit: parseInt(limit),
                offset: parseInt(offset),
                hasMore: total > parseInt(offset) + parseInt(limit)
            }
        });
    } catch (error) {
        console.error('Error fetching reservations by table:', error);
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการจองของโต๊ะ',
            error: error.message
        });
    }
}

exports.refreshTableAndSeatStatus = async (req, res) => {
    try {
        const tables = await prisma.table.findMany({
            include: {
                seat: true,
                reservation: {
                    where: {
                        status: {
                            in: ['PENDING', 'CONFIRMED']
                        }
                    }
                }
            }
        });

        if (!tables || tables.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบข้อมูลโต๊ะ'
            });
        }

        for (const table of tables) {
            const hasActiveReservation = table.reservation.length > 0;

            // อัปเดตสถานะโต๊ะ
            await prisma.table.update({
                where: { id: table.id },
                data: {
                    status: hasActiveReservation ? 'RESERVED' : 'AVAILABLE'
                }
            });

            // อัปเดตสถานะที่นั่งทั้งหมดในโต๊ะนี้
            for (const seat of table.seat) {
                await prisma.seat.update({
                    where: { id: seat.id },
                    data: {
                        status: hasActiveReservation ? 'RESERVED' : 'AVAILABLE'
                    }
                });
            }
        }

        return res.status(200).json({
            success: true,
            message: 'รีเฟรชสถานะโต๊ะและที่นั่งสำเร็จ'
        });
    } catch (error) {
        console.error('Error refreshing table/seat status:', error);
        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการรีเฟรชสถานะ',
            error: error.message
        });
    }
};






























































