import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1583939082801 implements MigrationInterface {
    name = 'UserMigration1583939082801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `userInfoId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_5c634c605ff93c4ac0f1be62f0` (`userInfoId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_5c634c605ff93c4ac0f1be62f0` ON `user` (`userInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_5c634c605ff93c4ac0f1be62f00` FOREIGN KEY (`userInfoId`) REFERENCES `user_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_5c634c605ff93c4ac0f1be62f00`", undefined);
        await queryRunner.query("DROP INDEX `REL_5c634c605ff93c4ac0f1be62f0` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_5c634c605ff93c4ac0f1be62f0`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `userInfoId`", undefined);
    }

}
