import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584672855485 implements MigrationInterface {
    name = 'UserMigration1584672855485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` ADD `parentCategoryId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` ADD CONSTRAINT `FK_9e5435ba76dbc1f1a0705d4db43` FOREIGN KEY (`parentCategoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` DROP FOREIGN KEY `FK_9e5435ba76dbc1f1a0705d4db43`", undefined);
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `parentCategoryId`", undefined);
    }

}
