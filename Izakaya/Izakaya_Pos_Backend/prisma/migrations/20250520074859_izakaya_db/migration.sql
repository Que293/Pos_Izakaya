-- CreateTable
CREATE TABLE `course` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courseitem` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `menuItemId` VARCHAR(191) NOT NULL,

    INDEX `CourseItem_menuItemId_fkey`(`menuItemId`),
    UNIQUE INDEX `CourseItem_courseId_menuItemId_key`(`courseId`, `menuItemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventorycategory` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventoryitem` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `unit` VARCHAR(191) NOT NULL,
    `quantityInStock` DECIMAL(10, 2) NOT NULL,
    `alertThreshold` DECIMAL(10, 2) NOT NULL,
    `costPerUnit` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    INDEX `InventoryItem_categoryId_fkey`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventorytransaction` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('STOCK_IN', 'STOCK_OUT', 'ADJUSTMENT') NOT NULL,
    `quantity` DECIMAL(10, 2) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `inventoryItemId` VARCHAR(191) NOT NULL,

    INDEX `InventoryTransaction_inventoryItemId_fkey`(`inventoryItemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menucategory` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `displayOrder` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menuitem` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    INDEX `MenuItem_categoryId_fkey`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menuitemingredient` (
    `id` VARCHAR(191) NOT NULL,
    `quantityRequired` DECIMAL(10, 2) NOT NULL,
    `menuItemId` VARCHAR(191) NOT NULL,
    `inventoryItemId` VARCHAR(191) NOT NULL,

    INDEX `MenuItemIngredient_inventoryItemId_fkey`(`inventoryItemId`),
    UNIQUE INDEX `MenuItemIngredient_menuItemId_inventoryItemId_key`(`menuItemId`, `inventoryItemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` VARCHAR(191) NOT NULL,
    `orderNumber` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'PREPARING', 'SERVED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `notes` VARCHAR(191) NULL,
    `hasCourse` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `seatId` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NULL,

    UNIQUE INDEX `Order_orderNumber_key`(`orderNumber`),
    INDEX `Order_courseId_fkey`(`courseId`),
    INDEX `Order_seatId_fkey`(`seatId`),
    INDEX `Order_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderitem` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'PREPARING', 'SERVED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `menuItemId` VARCHAR(191) NOT NULL,

    INDEX `OrderItem_menuItemId_fkey`(`menuItemId`),
    INDEX `OrderItem_orderId_fkey`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `receiptNumber` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `method` ENUM('CASH', 'CREDIT_CARD', 'DEBIT_CARD', 'QR_CODE', 'MOBILE_BANKING') NOT NULL,
    `status` ENUM('PENDING', 'COMPLETED', 'REFUNDED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    `transactionRef` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Payment_receiptNumber_key`(`receiptNumber`),
    UNIQUE INDEX `Payment_orderId_key`(`orderId`),
    INDEX `Payment_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservation` (
    `id` VARCHAR(191) NOT NULL,
    `customerName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `partySize` INTEGER NOT NULL,
    `reservationTime` DATETIME(3) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tableId` VARCHAR(191) NOT NULL,

    INDEX `Reservation_tableId_fkey`(`tableId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seat` (
    `id` VARCHAR(191) NOT NULL,
    `seatNumber` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'RESERVED', 'OCCUPIED') NOT NULL DEFAULT 'AVAILABLE',
    `tableId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Seat_tableId_seatNumber_key`(`tableId`, `seatNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table` (
    `id` VARCHAR(191) NOT NULL,
    `tableNumber` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NOT NULL,
    `status` ENUM('AVAILABLE', 'RESERVED', 'OCCUPIED') NOT NULL DEFAULT 'AVAILABLE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Table_tableNumber_key`(`tableNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `pin` VARCHAR(191) NOT NULL,
    `role` ENUM('OWNER', 'MANAGER', 'STAFF') NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `courseitem` ADD CONSTRAINT `CourseItem_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `courseitem` ADD CONSTRAINT `CourseItem_menuItemId_fkey` FOREIGN KEY (`menuItemId`) REFERENCES `menuitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventoryitem` ADD CONSTRAINT `InventoryItem_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `inventorycategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventorytransaction` ADD CONSTRAINT `InventoryTransaction_inventoryItemId_fkey` FOREIGN KEY (`inventoryItemId`) REFERENCES `inventoryitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `menuitem` ADD CONSTRAINT `MenuItem_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `menucategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `menuitemingredient` ADD CONSTRAINT `MenuItemIngredient_inventoryItemId_fkey` FOREIGN KEY (`inventoryItemId`) REFERENCES `inventoryitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `menuitemingredient` ADD CONSTRAINT `MenuItemIngredient_menuItemId_fkey` FOREIGN KEY (`menuItemId`) REFERENCES `menuitem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `Order_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `Order_seatId_fkey` FOREIGN KEY (`seatId`) REFERENCES `seat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderitem` ADD CONSTRAINT `OrderItem_menuItemId_fkey` FOREIGN KEY (`menuItemId`) REFERENCES `menuitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderitem` ADD CONSTRAINT `OrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `Payment_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservation` ADD CONSTRAINT `Reservation_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `seat` ADD CONSTRAINT `Seat_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `table`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
