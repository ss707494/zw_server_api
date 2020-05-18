import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1584080773523 implements MigrationInterface {
    name = 'UserMigration1584080773523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_5c634c605ff93c4ac0f1be62f0` ON `user`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_5c634c605ff93c4ac0f1be62f0` ON `user` (`userInfoId`)", undefined);
    }

}
