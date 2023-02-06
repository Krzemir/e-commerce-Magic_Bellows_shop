/*
  Warnings:

  - Made the column `products` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `products` JSON NOT NULL;
