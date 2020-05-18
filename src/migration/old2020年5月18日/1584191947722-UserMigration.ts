import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584191947722 implements MigrationInterface {
    name = 'UserMigration1584191947722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_2212f49597d9a1f372cd61bbf7c`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_468209353bcf0e6fa83e86d7b43`", undefined);
        await queryRunner.query("DROP INDEX `IDX_2212f49597d9a1f372cd61bbf7` ON `r_order_user`", undefined);
        await queryRunner.query("DROP INDEX `REL_2212f49597d9a1f372cd61bbf7` ON `r_order_user`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD `rOrderProductId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_9bf12347721050a8e91ce7afa66` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_c045bc35d38102e025a0f0637d8` FOREIGN KEY (`rOrderProductId`) REFERENCES `r_order_product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_c045bc35d38102e025a0f0637d8`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_9bf12347721050a8e91ce7afa66`", undefined);
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `rOrderProductId`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP COLUMN `userId`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_2212f49597d9a1f372cd61bbf7` ON `r_order_user` (`order_id`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_2212f49597d9a1f372cd61bbf7` ON `r_order_user` (`order_id`)", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_468209353bcf0e6fa83e86d7b43` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_2212f49597d9a1f372cd61bbf7c` FOREIGN KEY (`order_id`) REFERENCES `order_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
