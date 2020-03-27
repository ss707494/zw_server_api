import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585295659766 implements MigrationInterface {
    name = 'UserMigration1585295659766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` ADD `isDisable` int NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` DROP COLUMN `isDisable`", undefined);
    }

}
