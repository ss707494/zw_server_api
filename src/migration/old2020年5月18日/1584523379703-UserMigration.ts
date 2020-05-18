import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584523379703 implements MigrationInterface {
    name = 'UserMigration1584523379703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict` ADD `dictTypeFirstId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `dict` ADD CONSTRAINT `FK_c48d8caabae5789b3dbc668201c` FOREIGN KEY (`dictTypeFirstId`) REFERENCES `dict_type_first`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dict` DROP FOREIGN KEY `FK_c48d8caabae5789b3dbc668201c`", undefined);
        await queryRunner.query("ALTER TABLE `dict` DROP COLUMN `dictTypeFirstId`", undefined);
    }

}
