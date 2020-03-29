import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585479045959 implements MigrationInterface {
    name = 'UserMigration1585479045959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `selfAddressId`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `selfAddressId` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `selfAddressId`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD `selfAddressId` int NULL DEFAULT '0'", undefined);
    }

}
