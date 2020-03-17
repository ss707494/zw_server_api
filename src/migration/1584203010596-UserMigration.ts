import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584203010596 implements MigrationInterface {
    name = 'UserMigration1584203010596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `FK_66422066ad58b5ac9b70893acc2` ON `r_order_product`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `productId`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("CREATE INDEX `FK_66422066ad58b5ac9b70893acc2` ON `r_order_product` (`productId`)", undefined);
    }

}
