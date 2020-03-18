import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584534601394 implements MigrationInterface {
    name = 'UserMigration1584534601394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` CHANGE `shelves_type` `shelvesTypes` varchar(200) NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` CHANGE `shelvesTypes` `shelves_type` varchar(200) NULL DEFAULT ''", undefined);
    }

}
