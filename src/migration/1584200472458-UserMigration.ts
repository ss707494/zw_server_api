import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584200472458 implements MigrationInterface {
    name = 'UserMigration1584200472458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `FK_c6a33368d4d924be76297766a00` ON `r_order_product`", undefined);
        await queryRunner.query("ALTER TABLE `r_order_product` DROP COLUMN `orderInfoId`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `r_order_product` ADD `orderInfoId` varchar(40) NULL", undefined);
        await queryRunner.query("CREATE INDEX `FK_c6a33368d4d924be76297766a00` ON `r_order_product` (`orderInfoId`)", undefined);
    }

}
