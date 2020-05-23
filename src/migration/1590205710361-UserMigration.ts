import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1590205710361 implements MigrationInterface {
    name = 'UserMigration1590205710361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_address` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` ADD CONSTRAINT `FK_1abd8badc4a127b0f357d9ecbc2` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_address` DROP FOREIGN KEY `FK_1abd8badc4a127b0f357d9ecbc2`", undefined);
        await queryRunner.query("ALTER TABLE `user_address` DROP COLUMN `userId`", undefined);
    }

}
