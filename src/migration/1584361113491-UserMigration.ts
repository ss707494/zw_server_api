import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584361113491 implements MigrationInterface {
    name = 'UserMigration1584361113491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `userAddressId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD CONSTRAINT `FK_afd04ff7968731c29fb133d782f` FOREIGN KEY (`userAddressId`) REFERENCES `user_address`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP FOREIGN KEY `FK_afd04ff7968731c29fb133d782f`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `userAddressId`", undefined);
    }

}
