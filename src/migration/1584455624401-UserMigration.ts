import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584455624401 implements MigrationInterface {
    name = 'UserMigration1584455624401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `data_config` CHANGE `remark` `remark` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `data_config` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
    }

}
