import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1589973382477 implements MigrationInterface {
    name = 'UserMigration1589973382477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` ADD CONSTRAINT `FK_0fb788a5054c0f221e46986b0c0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP FOREIGN KEY `FK_0fb788a5054c0f221e46986b0c0`", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` DROP COLUMN `userId`", undefined);
    }

}
