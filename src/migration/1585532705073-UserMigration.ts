import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585532705073 implements MigrationInterface {
    name = 'UserMigration1585532705073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `expirationTime` timestamp NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `expirationTime`", undefined);
    }

}
