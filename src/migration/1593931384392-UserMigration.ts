import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1593931384392 implements MigrationInterface {
    name = 'UserMigration1593931384392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `group_order` ADD `orderInfoId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD UNIQUE INDEX `IDX_adaa0743a2456e26d77370c54f` (`orderInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD `groupQueueId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD `userId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD `orderInfoId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD UNIQUE INDEX `IDX_0289ebc60f6205dae3cc6a0fb5` (`orderInfoId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_adaa0743a2456e26d77370c54f` ON `group_order` (`orderInfoId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_0289ebc60f6205dae3cc6a0fb5` ON `r_order_user` (`orderInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD CONSTRAINT `FK_adaa0743a2456e26d77370c54f8` FOREIGN KEY (`orderInfoId`) REFERENCES `order_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD CONSTRAINT `FK_7ec3c64883316017a36ca769353` FOREIGN KEY (`groupQueueId`) REFERENCES `group_queue`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `group_order` ADD CONSTRAINT `FK_b8d81b3343da02ab5e68015ded8` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` ADD CONSTRAINT `FK_0289ebc60f6205dae3cc6a0fb54` FOREIGN KEY (`orderInfoId`) REFERENCES `order_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_user` DROP FOREIGN KEY `FK_0289ebc60f6205dae3cc6a0fb54`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP FOREIGN KEY `FK_b8d81b3343da02ab5e68015ded8`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP FOREIGN KEY `FK_7ec3c64883316017a36ca769353`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP FOREIGN KEY `FK_adaa0743a2456e26d77370c54f8`", undefined);
        await queryRunner.query("DROP INDEX `REL_0289ebc60f6205dae3cc6a0fb5` ON `r_order_user`", undefined);
        await queryRunner.query("DROP INDEX `REL_adaa0743a2456e26d77370c54f` ON `group_order`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP INDEX `IDX_0289ebc60f6205dae3cc6a0fb5`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_user` DROP COLUMN `orderInfoId`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP COLUMN `userId`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP COLUMN `groupQueueId`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP INDEX `IDX_adaa0743a2456e26d77370c54f`", undefined);
        await queryRunner.query("ALTER TABLE `group_order` DROP COLUMN `orderInfoId`", undefined);
    }

}
