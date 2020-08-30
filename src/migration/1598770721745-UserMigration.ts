import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1598770721745 implements MigrationInterface {
    name = 'UserMigration1598770721745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `userLevel` `userLevelId` varchar(255) NOT NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` DROP COLUMN `userLevelId`", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` ADD `userLevelId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` ADD CONSTRAINT `FK_3f064ef1a95cc8f2e1f076da31f` FOREIGN KEY (`userLevelId`) REFERENCES `dict`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promo_code` DROP FOREIGN KEY `FK_3f064ef1a95cc8f2e1f076da31f`", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` DROP COLUMN `userLevelId`", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` ADD `userLevelId` varchar(255) NOT NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `userLevelId` `userLevel` varchar(255) NOT NULL DEFAULT ''", undefined);
    }

}
