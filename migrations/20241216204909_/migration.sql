-- CreateTable
CREATE TABLE `shipping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,
    `Status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `shipping_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
