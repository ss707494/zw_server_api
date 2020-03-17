import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584163034413 implements MigrationInterface {
    name = 'UserMigration1584163034413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD UNIQUE INDEX `IDX_2212f49597d9a1f372cd61bbf7` (`order_id`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_2212f49597d9a1f372cd61bbf7` ON `r_order_user` (`order_id`)", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_2212f49597d9a1f372cd61bbf7c` FOREIGN KEY (`order_id`) REFERENCES `order_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_468209353bcf0e6fa83e86d7b43` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `order_info` ADD CONSTRAINT `FK_7661050b8720b3a23d1b973115f` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `order_info` DROP FOREIGN KEY `FK_7661050b8720b3a23d1b973115f`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_468209353bcf0e6fa83e86d7b43`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_2212f49597d9a1f372cd61bbf7c`", undefined);
        await queryRunner.query("DROP INDEX `REL_2212f49597d9a1f372cd61bbf7` ON `r_order_user`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP INDEX `IDX_2212f49597d9a1f372cd61bbf7`", undefined);
        await queryRunner.query("ALTER TABLE `order_info` DROP COLUMN `userId`", undefined);
    }

}
