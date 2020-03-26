import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585227064159 implements MigrationInterface {
    name = 'UserMigration1585227064159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` ADD `lastOutAmount` float(12) NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` DROP COLUMN `lastOutAmount`", undefined);
    }

}
