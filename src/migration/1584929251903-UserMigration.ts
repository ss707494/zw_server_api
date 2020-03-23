import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584929251903 implements MigrationInterface {
    name = 'UserMigration1584929251903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `generateCoin` `generateCoin` float NULL COMMENT '订单产生达人币' DEFAULT '0'", undefined);
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `deductCoin` `deductCoin` float NULL COMMENT '订单抵扣达人币' DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `deductCoin` `deductCoin` float(12) NULL COMMENT '订单抵扣达人币' DEFAULT '0'", undefined);
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `generateCoin` `generateCoin` float(12) NULL COMMENT '订单产生达人币' DEFAULT '0'", undefined);
    }

}
