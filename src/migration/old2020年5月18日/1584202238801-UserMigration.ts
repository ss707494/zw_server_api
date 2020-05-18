import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584202238801 implements MigrationInterface {
    name = 'UserMigration1584202238801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productNumber` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_66422066ad58b5ac9b70893acc2` FOREIGN KEY (`productId`, `productNumber`) REFERENCES `product`(`id`,`number`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_66422066ad58b5ac9b70893acc2`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productNumber`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productId`", undefined);
    }

}
