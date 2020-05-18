import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584593815815 implements MigrationInterface {
    name = 'UserMigration1584593815815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` ADD `packingUnit` varchar(10) NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `packingUnit`", undefined);
    }

}
