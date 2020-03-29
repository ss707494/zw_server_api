import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585456082076 implements MigrationInterface {
    name = 'UserMigration1585456082076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `userLevel` varchar(255) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `userLevel`", undefined);
    }

}
