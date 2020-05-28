import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1590634795588 implements MigrationInterface {
    name = 'UserMigration1590634795588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `shop_cart` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` ADD CONSTRAINT `FK_6c05588975ce1f860c16fbd6431` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` ADD CONSTRAINT `FK_d528eb6bd9f3166cbb092b1127a` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `shop_cart` DROP FOREIGN KEY `FK_d528eb6bd9f3166cbb092b1127a`", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` DROP FOREIGN KEY `FK_6c05588975ce1f860c16fbd6431`", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` DROP COLUMN `productId`", undefined);
        await queryRunner.query("ALTER TABLE `shop_cart` DROP COLUMN `userId`", undefined);
    }

}
