import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584767030368 implements MigrationInterface {
    name = 'UserMigration1584767030368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` ADD `userLevel` varchar(255) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` DROP COLUMN `userLevel`", undefined);
    }

}
