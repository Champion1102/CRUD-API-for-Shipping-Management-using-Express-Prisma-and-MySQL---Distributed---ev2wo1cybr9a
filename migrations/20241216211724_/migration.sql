/*
  Warnings:

  - You are about to drop the column `Status` on the `shipping` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `shipping` DROP COLUMN `Status`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';
