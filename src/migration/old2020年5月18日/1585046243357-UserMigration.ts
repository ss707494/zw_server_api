import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1585046243357 implements MigrationInterface {
    name = 'UserMigration1585046243357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `dealPrice` float(12) NULL DEFAULT '0'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `dealPrice`", undefined);
    }

}
