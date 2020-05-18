import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1589782066744 implements MigrationInterface {
    name = 'UserMigration1589782066744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_img` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product_img` ADD CONSTRAINT `FK_5b52f440918a9d1ca1f13bf3bf8` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_img` DROP FOREIGN KEY `FK_5b52f440918a9d1ca1f13bf3bf8`", undefined);
        await queryRunner.query("ALTER TABLE `product_img` DROP COLUMN `productId`", undefined);
    }

}
