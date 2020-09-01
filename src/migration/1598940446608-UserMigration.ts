import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1598940446608 implements MigrationInterface {
    name = 'UserMigration1598940446608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `creditAddressInputType` varchar(255) NOT NULL DEFAULT 'Select'", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `zip` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `province` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `district` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `address` varchar(200) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `address`", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `district`", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `province`", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `zip`", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `creditAddressInputType`", undefined);
    }

}
