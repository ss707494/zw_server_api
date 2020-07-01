import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1592293304898 implements MigrationInterface {
    name = 'UserMigration1592293304898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `group_queue` ADD `productId` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `group_queue` ADD CONSTRAINT `FK_4908d95623a2505d95d0ef95b7c` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `group_queue` DROP FOREIGN KEY `FK_4908d95623a2505d95d0ef95b7c`", undefined);
        await queryRunner.query("ALTER TABLE `group_queue` DROP COLUMN `productId`", undefined);
    }

}
