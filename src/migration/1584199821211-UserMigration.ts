import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584199821211 implements MigrationInterface {
    name = 'UserMigration1584199821211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_c045bc35d38102e025a0f0637d8`", undefined);
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `rOrderProductId`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productNumber` int NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_66422066ad58b5ac9b70893acc` ON `r_order_product` (`productId`, `productNumber`)", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_66422066ad58b5ac9b70893acc2` FOREIGN KEY (`productId`, `productNumber`) REFERENCES `product`(`id`,`number`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_66422066ad58b5ac9b70893acc2`", undefined);
        await queryRunner.query("DROP INDEX `REL_66422066ad58b5ac9b70893acc` ON `r_order_product`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productNumber`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productId`", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD `rOrderProductId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_c045bc35d38102e025a0f0637d8` FOREIGN KEY (`rOrderProductId`) REFERENCES `r_order_product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
