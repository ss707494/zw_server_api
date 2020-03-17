import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584426334832 implements MigrationInterface {
    name = 'UserMigration1584426334832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` ADD CONSTRAINT `FK_acdf297e8a058bec0ceea8ad4b3` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` DROP FOREIGN KEY `FK_acdf297e8a058bec0ceea8ad4b3`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productId`", undefined);
    }

}
