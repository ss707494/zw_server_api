import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585048222871 implements MigrationInterface {
    name = 'UserMigration1585048222871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `userPayCardId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD CONSTRAINT `FK_db1c30fc066b674e5445e9e1d3d` FOREIGN KEY (`userPayCardId`) REFERENCES `user_pay_card`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP FOREIGN KEY `FK_db1c30fc066b674e5445e9e1d3d`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `userPayCardId`", undefined);
    }

}
