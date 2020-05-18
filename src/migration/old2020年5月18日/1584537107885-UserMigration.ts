import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584537107885 implements MigrationInterface {
    name = 'UserMigration1584537107885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict` CHANGE `remark` `remark` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
    }

}
