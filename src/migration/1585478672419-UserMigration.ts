import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585478672419 implements MigrationInterface {
    name = 'UserMigration1585478672419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `selfAddressIndex` `selfAddressId` int NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` CHANGE `selfAddressId` `selfAddressIndex` int NULL DEFAULT '0'", undefined);
    }

}
