import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584599276605 implements MigrationInterface {
    name = 'UserMigration1584599276605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` ADD `number` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD `number` int NOT NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `number`", undefined);
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `number`", undefined);
    }

}
