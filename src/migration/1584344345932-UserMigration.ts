import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584344345932 implements MigrationInterface {
    name = 'UserMigration1584344345932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_acdf297e8a058bec0ceea8ad4b3`", undefined);
        await queryRunner.query("CREATE TABLE `r_order_product_product_product` (`rOrderProductId` varchar(40) NOT NULL, `productId` varchar(40) NOT NULL, INDEX `IDX_c4dad41dbf625404aa218c4e11` (`rOrderProductId`), INDEX `IDX_bb9c02536a72044a37063b72c2` (`productId`), PRIMARY KEY (`rOrderProductId`, `productId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productId`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product_product_product` ADD CONSTRAINT `FK_c4dad41dbf625404aa218c4e117` FOREIGN KEY (`rOrderProductId`) REFERENCES `r_order_product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product_product_product` ADD CONSTRAINT `FK_bb9c02536a72044a37063b72c28` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product_product_product` DROP FOREIGN KEY `FK_bb9c02536a72044a37063b72c28`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product_product_product` DROP FOREIGN KEY `FK_c4dad41dbf625404aa218c4e117`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_bb9c02536a72044a37063b72c2` ON `r_order_product_product_product`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c4dad41dbf625404aa218c4e11` ON `r_order_product_product_product`", undefined);
        await queryRunner.query("DROP TABLE `r_order_product_product_product`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_acdf297e8a058bec0ceea8ad4b3` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
