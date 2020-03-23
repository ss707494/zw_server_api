import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584929451661 implements MigrationInterface {
    name = 'UserMigration1584929451661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `generateCoin`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `deductCoin`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `deductCoin` float(12) NULL COMMENT '订单抵扣达人币' DEFAULT '0'", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `generateCoin` float(12) NULL COMMENT '订单产生达人币' DEFAULT '0'", undefined);
    }

}
