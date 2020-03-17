import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584200623945 implements MigrationInterface {
    name = 'UserMigration1584200623945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `orderInfoId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_52f84b5285f77bbc4978f3306b8` FOREIGN KEY (`orderInfoId`) REFERENCES `order_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_52f84b5285f77bbc4978f3306b8`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `orderInfoId`", undefined);
    }

}
