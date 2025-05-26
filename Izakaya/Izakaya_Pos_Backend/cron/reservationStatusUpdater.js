const prisma = require('../src/config/prisma');
const cron = require('node-cron');

// ตั้งเวลาให้รันทุก 1 นาที 
cron.schedule('* * * * *', async () => {
  console.log('[CRON] Running reservation and seat status updater...');

  // ใช้เวลาปัจจุบันเป็น UTC ตรง ๆ
  const now = new Date(); // เวลานี้จะเป็น UTC

  const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60 * 1000);
  const fifteenMinutesLater = new Date(now.getTime() + 15 * 60 * 1000);

  try {
    // จองที่กำลังจะเริ่มใน 15 นาที
    const upcomingReservations = await prisma.reservation.findMany({
      where: {
        reservationTime: {
          gte: fifteenMinutesAgo,
          lte: fifteenMinutesLater
        },
        status: {
          in: ['PENDING', 'CONFIRMED']
        }
      }
    });

    for (const reservation of upcomingReservations) {
      await prisma.table.update({
        where: { id: reservation.tableId },
        data: { status: 'RESERVED' }
      });

      await prisma.seat.updateMany({
        where: { tableId: reservation.tableId },
        data: { status: 'RESERVED' }
      });
    }

    // จองที่เลยเวลามาเกิน 15 นาทีแต่ยังไม่มา
    const expiredReservations = await prisma.reservation.findMany({
      where: {
        reservationTime: {
          lte: fifteenMinutesAgo
        },
        status: {
          in: ['PENDING', 'CONFIRMED']
        }
      }
    });

    console.log(`[CRON] Found ${expiredReservations.length} expired reservations`);
    console.log('[CRON] Now (UTC):', now.toISOString());
    console.log('[CRON] 15 mins ago (UTC):', fifteenMinutesAgo.toISOString());

    for (const reservation of expiredReservations) {
      console.log(`[CRON] Expired reservation at ${reservation.reservationTime} for table ${reservation.tableId}`);
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { status: 'NO_SHOW' }
      });

      // เช็คว่ามีการจองล่วงหน้าสำหรับโต๊ะนี้อีกไหม
      const futureActive = await prisma.reservation.findFirst({
        where: {
          tableId: reservation.tableId,
          reservationTime: { gt: now },
          status: { in: ['PENDING', 'CONFIRMED'] }
        }
      });

      if (!futureActive) {
        console.log(`[CRON] No future reservations for table ${reservation.tableId}`);
        await prisma.table.update({
          where: { id: reservation.tableId },
          data: { status: 'AVAILABLE' }
        });

        const updated = await prisma.seat.updateMany({
          where: {
            tableId: reservation.tableId,
            status: 'RESERVED'
          },
          data: { status: 'AVAILABLE' }
        });
        console.log(`[CRON] Seat status update for table ${reservation.tableId} — ${updated.count} rows updated.`);
      }
    }

    console.log('[CRON] Reservation, table, and seat statuses updated successfully.');
  } catch (error) {
    console.error('[CRON] Error updating statuses:', error);
  }
});

module.exports = {};
