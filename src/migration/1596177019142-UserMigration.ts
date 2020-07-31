import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1596177019142 implements MigrationInterface {
    name = 'UserMigration1596177019142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` ADD `isGroup` int NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` DROP COLUMN `isGroup`", undefined);
    }

}
