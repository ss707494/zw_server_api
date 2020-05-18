import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584786089070 implements MigrationInterface {
    name = 'UserMigration1584786089070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `pickUpTime` timestamp NULL COMMENT '取货时间'", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `pickUpType` int NULL COMMENT '取货方式 1: 自提 2: 配送' DEFAULT 1", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `pickUpType`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `pickUpTime`", undefined);
    }

}
