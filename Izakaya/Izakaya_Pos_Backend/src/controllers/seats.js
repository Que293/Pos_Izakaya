const prisma = require('../config/prisma')
exports.getAllSeats = async (req, res) => {
    try {
        const { tableId } = req.params;

        // ตรวจสอบว่าโต๊ะมีอยู่จริงหรือไม่
        const table = await prisma.table.findUnique({
            where: { id: tableId }
        });

        if (!table) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบโต๊ะที่ระบุ'
            });
        }

        // ดึงข้อมูลที่นั่งทั้งหมดของโต๊ะนี้
        const seats = await prisma.seat.findMany({
            where: { tableId },
            orderBy: { seatNumber: 'asc' },
            include: {
                order: {
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        });
        const sanitizedSeats = seats.map(({ id, tableId, ...rest }) => rest);

        return res.status(200).json({
            success: true,
            data: sanitizedSeats,
            count: sanitizedSeats.length
        });

    } catch (error) {
        console.error('Error in getAllSeatsByTableId:', error);
        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลที่นั่ง',
            error: error.message
        });
    }
}

exports.getSeatByid = async (req, res) => {
    try {
        const { id } = req.params;

        const seat = await prisma.seat.findUnique({
            where: { id },
            include: {
                table: {
                    select: {
                        id: true,
                        tableNumber: true,
                        status: true
                    }
                },
                order: {
                    select: {
                        id: true,
                        status: true,
                        createdAt: true
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

        const { id: seatId, tableId, table, ...restSeat } = seat;
        const { id: tableInternalId, ...restTable } = table || {};

        const sanitizedSeat = {
            ...restSeat,
            table: restTable
        };


        return res.status(200).json({
            success: true,
            data: sanitizedSeat
        });

    } catch (error) {
        console.error('Error in getSeatById:', error);
        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลที่นั่ง',
            error: error.message
        });
    }
}

exports.addSeat = async (req, res) => {

    try {
        const { tableId } = req.params;
        const { seatNumber, status } = req.body;

        // ตรวจสอบว่ามีโต๊ะอยู๋ไหม
        const table = await prisma.table.findUnique({
            where: { id: tableId }
        });

        if (!table) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบโต๊ะที่ระบุ'
            });
        }

        // ตรวจสอบว่ามีเลขที่นั่งซ้ำกันในโต๊ะเดียวกันหรือไม่
        const existingSeat = await prisma.seat.findFirst({
            where: {
                tableId,
                seatNumber
            }
        });

        if (existingSeat) {
            return res.status(400).json({
                success: false,
                message: 'เลขที่นั่งนี้มีอยู่แล้วในโต๊ะนี้'
            });
        }

        // สร้างที่นั่งใหม่
        const seatStatus = status ? status : 'AVAILABLE'; 

        const newSeat = await prisma.seat.create({
            data: {
                seatNumber,
                status: seatStatus,
                table: {
                    connect: { id: tableId }
                }
            }
        });

        //เพิ่มจำนวน capacity ของโต๊ะ
        await prisma.table.update({
            where: { id: tableId },
            data: {
                capacity: { increment: 1 }
            }
        });

        const { id: seatId, tableId: tableInternalId, ...restSeat } = newSeat;
        const sanitizedSeat = {
            ...restSeat
        };

        return res.status(201).json({
            success: true,
            message: 'สร้างที่นั่งสำเร็จ',
            data: sanitizedSeat
        });

    } catch (error) {
        console.error('Error in createSeat:', error);
        return res.status(500).json({
            success: false,
            message: 'ข้อผิดพลาดในการสร้างนั่ง',
            error: error.message
        });
    }
}


exports.updateSeat = async (req, res) => {
    try {
        const { id } = req.params;
        const { seatNumber, status } = req.body;

        // ตรวจสอบว่ามีที่นั่งอยู่ไหม
        const existingSeat = await prisma.seat.findUnique({
            where: { id }
        });

        if (!existingSeat) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบนั่ง'
            });
        }

        // ตรวจสอบว่าเลขนั่งซ้ำในโต๊ะไหม
        if (seatNumber && seatNumber !== existingSeat.seatNumber) {
            const duplicateSeat = await prisma.seat.findFirst({
                where: {
                    tableId: existingSeat.tableId,
                    seatNumber
                }
            });

            if (duplicateSeat) {
                return res.status(400).json({
                    success: false,
                    message: 'เลขนั่งนี้อยู่แล้วในโต๊ะ'
                });
            }
        }

        // อัปเดตที่นั่ง
        const updatedSeat = await prisma.seat.update({
            where: { id },
            data: {
                ...(seatNumber && { seatNumber }),
                ...(status && { status })
            }
        });

        const { id: seatId, tableId, ...restSeat } = updatedSeat;
        const sanitizedSeat = {
            ...restSeat
        };

        return res.status(200).json({
            success: true,
            message: 'อัปเดตที่นั่งสำเร็จ',
            data: sanitizedSeat
        });

    } catch (error) {
        console.error('Error in updateSeat:', error);
        return res.status(500).json({
            success: false,
            message: 'ข้อผิดพลาดในการปเดตนั่ง',
            error: error.message
        });
    }
}

exports.updataSeatStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // ตรวจสอบว่ามีการระบุสถานะหรือไม่
        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'กรุณาระบุสถานะที่ต้องการอัปเดต'
            });
        }

        // ตรวจสอบว่าสถานะที่ระบุถูกต้องหรือไม่
        const validStatuses = ['AVAILABLE', 'RESERVED', 'OCCUPIED'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'สถานะไม่ถูกต้อง กรุณาระบุ: AVAILABLE, RESERVED, หรือ OCCUPIED'
            });
        }

        // ตรวจสอบว่ามีที่นั่งนี้หรือไม่
        const seat = await prisma.seat.findUnique({
            where: { id },
            include: {
                order: {
                    where: {
                        status: {
                            notIn: ['COMPLETED', 'CANCELLED']
                        }
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

        // ตรวจสอบความสัมพันธ์กับโต๊ะ
        if (status === 'AVAILABLE') {
            const table = await prisma.table.findUnique({
                where: { id: seat.tableId }
            });

            // ถ้าโต๊ะกำลังถูกใช้งาน แต่ต้องการทำให้ที่นั่งว่าง
            if (table && table.status === 'OCCUPIED') {
                if (seat.order && seat.order.length > 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'ไม่สามารถเปลี่ยนสถานะที่นั่งเป็นว่างได้ เนื่องจากมีออเดอร์ที่ยังไม่เสร็จสิ้น'
                    });
                }
            }
        }

        // อัปเดตสถานะที่นั่ง
        const updatedSeat = await prisma.seat.update({
            where: { id },
            data: { status }
        });

        // หากเปลี่ยนสถานะที่นั่งเป็น "OCCUPIED" อาจต้องอัปเดตสถานะโต๊ะด้วย
        if (status === 'OCCUPIED') {
            await prisma.table.update({
                where: { id: seat.tableId },
                data: { status: 'OCCUPIED' }
            });
        }

        // ตรวจสอบว่าทุกที่นั่งในโต๊ะว่างหรือไม่ เพื่ออัปเดตสถานะโต๊ะเป็น "AVAILABLE"
        if (status === 'AVAILABLE') {
            const allSeatsInTable = await prisma.seat.findMany({
                where: { tableId: seat.tableId }
            });

            const allSeatsAvailable = allSeatsInTable.every(s => s.status === 'AVAILABLE');

            if (allSeatsAvailable) {
                await prisma.table.update({
                    where: { id: seat.tableId },
                    data: { status: 'AVAILABLE' }
                });
            }
        }

        const { id: seatId, tableId, ...restSeat } = updatedSeat;
        const sanitizedSeat = {
            ...restSeat
        };

        return res.status(200).json({
            success: true,
            message: 'อัปเดตสถานะที่นั่งสำเร็จ',
            data: sanitizedSeat
        });

    } catch (error) {
        console.error('Error in updateSeatStatus:', error);
        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะที่นั่ง',
            error: error.message
        });
    }
}

exports.deleteSeat = async (req, res) => {
      try {
    const { id } = req.params;

    // ตรวจสอบว่ามีที่นั่งนี้หรือไม่
    const seat = await prisma.seat.findUnique({
      where: { id }
    });

    if (!seat) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบที่นั่งที่ระบุ'
      });
    }

    const tableId = seat.tableId;

    // ตรวจสอบว่า seat นี้มี order ที่ยังไม่เสร็จสิ้นหรือไม่
    const activeOrder = await prisma.order.findFirst({
      where: {
        seatId: id,
        status: {
          notIn: ['COMPLETED', 'CANCELLED']
        }
      }
    });

    if (activeOrder) {
      return res.status(400).json({
        success: false,
        message: 'ไม่สามารถลบที่นั่งได้เนื่องจากมีออเดอร์ที่ยังไม่เสร็จสิ้น'
      });
    }

    // ลบที่นั่ง
    await prisma.seat.delete({
      where: { id }
    });

    // อัปเดตจำนวนที่นั่งในตาราง (ลด 1)
    const table = await prisma.table.findUnique({
      where: { id: tableId }
    });

    if (table) {
      await prisma.table.update({
        where: { id: tableId },
        data: {
          capacity: Math.max(0, (table.capacity || 0) - 1),
          updatedAt: new Date()
        }
      });
    }

    return res.status(200).json({
      success: true,
      message: 'ลบที่นั่งสำเร็จ'
    });

  } catch (error) {
    console.error('Error in deleteSeat:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการลบที่นั่ง',
      error: error.message
    });
  }
};