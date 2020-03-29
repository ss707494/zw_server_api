import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585472490426 implements MigrationInterface {
    name = 'UserMigration1585472490426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `currentUserLevel` varchar(255) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `currentUserLevel`", undefined);
    }

}
