import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585031460854 implements MigrationInterface {
    name = 'UserMigration1585031460854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `remark` `remark` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
    }

}
