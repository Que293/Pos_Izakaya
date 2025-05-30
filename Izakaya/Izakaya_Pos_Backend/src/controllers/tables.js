const prisma = require('../config/prisma')
const { TableStatus } = require('../constants/status')

exports.getAllTables = async (req, res) => {
  try {
    const { status } = req.query;
    const validStatuses = ['AVAILABLE', 'OCCUPIED', 'RESERVED'];

    let filter = { active: true };
    if (typeof status === 'string' && validStatuses.includes(status)) {
      filter.status = status;
    }
    // ดึงข้อมูลโต๊ะ
    const tables = await prisma.table.findMany({
      where: filter,
      include: {
        seat: true,
        reservation: {
          where: {
            status: 'confirmed',
            reservationTime: {
              gte: new Date()
            }
          }
        }
      },
      orderBy: {
        tableNumber: 'asc'
      }
    });
    //ตัด id ออกไม่ต้องแสดง
    const sanitizedTables = tables.map(table => ({
      tableNumber: table.tableNumber,
      capacity: table.capacity,
      status: table.status,
      createdAt: table.createdAt,
      updatedAt: table.updatedAt,
      active: table.active,
      seat: (table.seat || []).map(seat => ({
        seatNumber: seat.seatNumber,
        status: seat.status,
      })),
      reservation: (table.reservation || []).map(reservation => {
        const { id, ...rest } = reservation;
        return rest;
      }),
    }));


    return res.status(200).json({
      success: true,
      data: sanitizedTables,
    });
  } catch (error) {
    console.error('Error fetching tables:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลโต๊ะ',
      error: error?.message || 'Unexpected error',
    });
  }
};


exports.getTablesByid = async (req, res) => {
  try {
    const id = req.params.id;

    const table = await prisma.table.findUnique({
      where: { id },
      include: {
        seat: true,
        reservation: {
          where: {
            status: 'confirmed',
            reservationTime: {
              gte: new Date()
            }
          }
        }
      }
    });

    if (!table) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบข้อมูลโต๊ะ'
      });
    }

    //ตัด ID ออก ไม่ต้องแสดง
    const sanitizedTable = {
      tableNumber: table.tableNumber,
      capacity: table.capacity,
      status: table.status,
      createdAt: table.createdAt,
      updatedAt: table.updatedAt,
      active: table.active,
      seat: (table.seat || []).map(seat => ({
        seatNumber: seat.seatNumber,
        status: seat.status,
      })),
      reservation: (table.reservation || []).map(({ id, ...rest }) => rest),
    };

    return res.status(200).json({
      success: true,
      data: sanitizedTable,
    });
  } catch (error) {
    console.error('Error fetching table:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลโต๊ะ',
      error: error.message
    });
  }
};


exports.createTables = async (req, res) => {
  try {
    const { tableNumber, capacity } = req.body;

    const existingTable = await prisma.table.findUnique({
      where: { tableNumber }
    });
    if (existingTable) {
      return res.status(400).json({
        success: false,
        message: 'หมายเลขโต๊ะนี้มีอยู่ในระบบแล้ว'
      });
    }

    const newTable = await prisma.table.create({
      data: {
        tableNumber,
        capacity: parseInt(capacity),
        status: TableStatus.AVAILABLE,
        active: true
      }
    });
    //สร้างที่นั่งตามจำนวน capacity
    const seats = [];
    for (let i = 1; i <= capacity; i++) {
      const seat = await prisma.seat.create({
        data: {
          seatNumber: `${i}`,
          status: TableStatus.AVAILABLE,
          tableId: newTable.id
        }
      });
      seats.push(seat);
    }

    const { id, createdAt, updatedAt, ...tableWithoutId } = newTable; // ตัด id ออกไม่แสดง

    return res.status(201).json({
      success: true,
      message: 'สร้างโต๊ะสำเร็จ',
      data: {
        ...tableWithoutId,
        seats: seats.map(({ id, tableId, createdAt, updatedAt, ...rest }) => rest)
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' })
  }
}
// แก้ไขข้อมูลโต๊ะ
exports.updataTables = async (req, res) => {
  try {
    // ตรวจสอบสิทธิ์ (เฉพาะ OWNER หรือ MANAGER)
    /*
     if (!hasPermission(req.user, ['OWNER', 'MANAGER'])) {
       return res.status(403).json({
         success: false,
         message: 'ไม่มีสิทธิ์ในการดำเนินการนี้'
       });
     }
      */
    const id = req.params.id;
    const { tableNumber, capacity } = req.body;

    // ตรวจสอบว่าโต๊ะมีอยู่หรือไม่
    const existingTable = await prisma.table.findUnique({
      where: { id },
      include: { seat: true }
    });

    if (!existingTable) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบข้อมูลโต๊ะ'
      });
    }

    // ตรวจสอบว่าหมายเลขโต๊ะซ้ำหรือไม่ (ถ้ามีการเปลี่ยน)
    if (tableNumber !== existingTable.tableNumber) {
      const duplicateTable = await prisma.table.findUnique({
        where: { tableNumber }
      });

      if (duplicateTable) {
        return res.status(400).json({
          success: false,
          message: 'หมายเลขโต๊ะนี้มีอยู่ในระบบแล้ว'
        });
      }
    }

    // อัปเดตโต๊ะ
    const updatedTable = await prisma.table.update({
      where: { id },
      data: {
        tableNumber,
        capacity: parseInt(capacity)
      }
    });

    // จัดการกับที่นั่ง
    const currentSeatsCount = existingTable.seat.length;
    const newCapacity = parseInt(capacity);

    // ถ้า capacity เพิ่มขึ้น ให้เพิ่มที่นั่ง
    if (newCapacity > currentSeatsCount) {
      for (let i = currentSeatsCount + 1; i <= newCapacity; i++) {
        await prisma.seat.create({
          data: {
            seatNumber: `${i}`,
            status: TableStatus.AVAILABLE,
            tableId: id
          }
        });
      }
    }
    // ถ้า capacity ลดลง ให้ลบที่นั่ง
    else if (newCapacity < currentSeatsCount) {
      // ลบที่นั่งที่เกิน
      // ตรวจสอบก่อนว่าที่นั่งที่จะลบมีการใช้งานอยู่หรือไม่
      const seatsToCheck = existingTable.seat.slice(newCapacity);
      const seatIds = seatsToCheck.map(seat => seat.id);

      // ตรวจสอบว่ามีออร์เดอร์ที่เกี่ยวข้องกับที่นั่งที่จะลบหรือไม่
      const activeOrders = await prisma.order.findMany({
        where: {
          seatId: { in: seatIds },
          status: {
            notIn: ['COMPLETED', 'CANCELLED']
          }
        }
      });

      if (activeOrders.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'ไม่สามารถลดจำนวนที่นั่งได้เนื่องจากมีการใช้งานอยู่'
        });
      }

      // ลบที่นั่งที่เกิน
      await prisma.seat.deleteMany({
        where: {
          tableId: id,
          seatNumber: {
            in: seatsToCheck.map(seat => seat.seatNumber)
          }
        }
      });
    }

    // ดึงข้อมูลโต๊ะที่อัปเดตแล้วพร้อมที่นั่ง
    const result = await prisma.table.findUnique({
      where: { id },
      include: { seat: true }
    });


    const sanitizedResult = {
      ...result,
      id: undefined,// ตัด id ของ table ออก
      createdAt: undefined,
      updatedAt: undefined,
      seat: result.seat.map(({ id, tableId, ...rest }) => rest) // ตัด id ของ seat ออก
    };

    return res.status(200).json({
      success: true,
      message: 'อัปเดตโต๊ะสำเร็จ',
      data: sanitizedResult
    });
  } catch (error) {
    console.error('Error updating table:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการอัปเดตโต๊ะ',
      error: error.message
    });
  }
}


exports.deleteTables = async (req, res) => {
  try {
    // ตรวจสอบสิทธิ์ (เฉพาะ OWNER หรือ MANAGER)
    /*
    if (!hasPermission(req.user, ['OWNER', 'MANAGER'])) {
      return res.status(403).json({
        success: false,
        message: 'ไม่มีสิทธิ์ในการดำเนินการนี้'
      });
    }*/

    const { id } = req.params;

    // ตรวจสอบว่าโต๊ะมีอยู่หรือไม่
    const existingTable = await prisma.table.findUnique({
      where: { id },
      include: { seat: true }
    });

    if (!existingTable) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบข้อมูลโต๊ะ'
      });
    }

    // ตรวจสอบว่าโต๊ะมีการใช้งานอยู่หรือไม่
    if (existingTable.status === TableStatus.OCCUPIED) {
      return res.status(400).json({
        success: false,
        message: 'ไม่สามารถลบโต๊ะที่กำลังใช้งานได้'
      });
    }

    // ตรวจสอบว่ามีการจองที่มีผลในอนาคตหรือไม่
    const activeReservations = await prisma.reservation.findMany({
      where: {
        tableId: id,
        status: 'confirmed',
        reservationTime: {
          gte: new Date()
        }
      }
    });

    if (activeReservations.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'ไม่สามารถลบโต๊ะที่มีการจองได้'
      });
    }

    //  ลบ seat ที่เกี่ยวข้องก่อน แล้วค่อยลบโต๊ะ
    await prisma.seat.deleteMany({
      where: { tableId: id }
    });

    await prisma.table.delete({
      where: { id }
    });


    return res.status(200).json({
      success: true,
      message: 'ลบโต๊ะสำเร็จ'
    });
  } catch (error) {
    console.error('Error deleting table:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการลบโต๊ะ',
      error: error.message
    });
  }
}

exports.statusTables = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // ตรวจสอบว่าสถานะถูกต้องหรือไม่
    if (!Object.values(TableStatus).includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'สถานะไม่ถูกต้อง'
      });
    }

    // ตรวจสอบว่าโต๊ะมีอยู่หรือไม่
    const existingTable = await prisma.table.findUnique({
      where: { id },
      include: { seat: true }
    });

    if (!existingTable) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบข้อมูลโต๊ะ'
      });
    }

    // อัปเดตสถานะโต๊ะ
    const updatedTable = await prisma.table.update({
      where: { id },
      data: { status }
    });

    const sanitizedupdatedTable = {
      ...updatedTable,
      id: undefined,
      createdAt: undefined,
      updatedAt: undefined
    }
    // อัปเดตสถานะที่นั่งทั้งหมดของโต๊ะด้วย
    await prisma.seat.updateMany({
      where: { tableId: id },
      data: { status }
    });

    return res.status(200).json({
      success: true,
      message: 'อัปเดตสถานะโต๊ะสำเร็จ',
      data: sanitizedupdatedTable
    });
  } catch (error) {
    console.error('Error updating table status:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะโต๊ะ',
      error: error.message
    });
  }
}



exports.refreshAllTableCapacity = async (req, res) => {
  try {
    const tables = await prisma.table.findMany();

    if (!tables || tables.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบข้อมูลโต๊ะ'
      });
    }
    const updatedTables = [];

    for (const table of tables) {
      const seatCount = await prisma.seat.count({
        where: { tableId: table.id }
      });

      const updatedTable = await prisma.table.update({
        where: { id: table.id },
        data: {
          capacity: seatCount,
          updatedAt: new Date()
        }
      });

      updatedTables.push(updatedTable);
    }

    return res.status(200).json({
      success: true,
      message: 'รีเฟรชจำนวนที่นั่งของทุกโต๊ะสำเร็จ'

    });

  } catch (error) {
    console.error('Error in refreshAllTableCapacities:', error);
    return res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดขณะรีเฟรชจำนวนที่นั่งของทุกโต๊ะ',
      error: error.message
    });
  }
};