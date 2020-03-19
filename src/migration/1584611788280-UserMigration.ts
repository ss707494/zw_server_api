import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584611788280 implements MigrationInterface {
    name = 'UserMigration1584611788280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `supplier` `supplier` varchar(40) NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `supplier` `supplier` varchar(40) NOT NULL", undefined);
    }

}
