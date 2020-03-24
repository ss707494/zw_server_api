import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585032548272 implements MigrationInterface {
    name = 'UserMigration1585032548272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `pickUpType`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `pickUpType` varchar(255) NULL COMMENT '取货方式 Self: 自提 Delivery: 配送' DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `pickUpType`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `pickUpType` int NULL COMMENT '取货方式 1: 自提 2: 配送' DEFAULT '1'", undefined);
    }

}
