import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585368081845 implements MigrationInterface {
    name = 'UserMigration1585368081845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `selfAddressIndex` int NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `selfAddressIndex`", undefined);
    }

}
