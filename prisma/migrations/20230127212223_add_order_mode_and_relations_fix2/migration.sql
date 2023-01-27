/*
  Warnings:

  - You are about to drop the `ProductInOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ProductInOrder` DROP FOREIGN KEY `ProductInOrder_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductInOrder` DROP FOREIGN KEY `ProductInOrder_productId_fkey`;

-- AlterTable
ALTER TABLE `Order` ADD COLUMN `comment` VARCHAR(191) NULL,
    ADD COLUMN `productId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `ProductInOrder`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
