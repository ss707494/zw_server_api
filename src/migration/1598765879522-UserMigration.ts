import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1598765879522 implements MigrationInterface {
    name = 'UserMigration1598765879522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` ADD `userLevel` varchar(255) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` DROP COLUMN `userLevel`", undefined);
    }

}
