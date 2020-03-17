import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584192641946 implements MigrationInterface {
    name = 'UserMigration1584192641946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `FK_468209353bcf0e6fa83e86d7b43` ON `r_order_user`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `rOrderProductId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_c6a33368d4d924be76297766a00` FOREIGN KEY (`rOrderProductId`) REFERENCES `r_order_product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_c6a33368d4d924be76297766a00`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `rOrderProductId`", undefined);
        await queryRunner.query("CREATE INDEX `FK_468209353bcf0e6fa83e86d7b43` ON `r_order_user` (`user_id`)", undefined);
    }

}
