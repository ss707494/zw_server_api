import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584531073184 implements MigrationInterface {
    name = 'UserMigration1584531073184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` ADD `shelves_type` varchar(200) NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `shelves_type`", undefined);
    }

}
