import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1590147758563 implements MigrationInterface {
    name = 'UserMigration1590147758563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` ADD `pickupAddressId` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` DROP COLUMN `pickupAddressId`", undefined);
    }

}
