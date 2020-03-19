import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584592799663 implements MigrationInterface {
    name = 'UserMigration1584592799663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` ADD `groupAmountUnit` varchar(20) NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `groupAmountUnit`", undefined);
    }

}
