import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585836006642 implements MigrationInterface {
    name = 'UserMigration1585836006642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `user_id` `user_id` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `user_id` `user_id` varchar(40) NOT NULL", undefined);
    }

}
