import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1590310822575 implements MigrationInterface {
    name = 'UserMigration1590310822575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` ADD `categoryId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`", undefined);
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `categoryId`", undefined);
    }

}
