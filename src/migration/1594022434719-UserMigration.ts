import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1594022434719 implements MigrationInterface {
    name = 'UserMigration1594022434719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_adaa0743a2456e26d77370c54f` ON `group_order`", undefined);
        await queryRunner.query("DROP INDEX `IDX_0289ebc60f6205dae3cc6a0fb5` ON `r_order_user`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_0289ebc60f6205dae3cc6a0fb5` ON `r_order_user` (`orderInfoId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_adaa0743a2456e26d77370c54f` ON `group_order` (`orderInfoId`)", undefined);
    }

}
