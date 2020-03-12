import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1583853057784 implements MigrationInterface {
    name = 'UserMigration1583853057784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` CHANGE `number` `number` int NOT NULL COMMENT '分类编号'", undefined);
        await queryRunner.query("ALTER TABLE `category` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `category` ADD PRIMARY KEY (`id`, `number`)", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `number` `number` int NOT NULL AUTO_INCREMENT COMMENT '分类编号'", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `number` `number` int NOT NULL COMMENT '编号'", undefined);
        await queryRunner.query("ALTER TABLE `product` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD PRIMARY KEY (`id`, `number`)", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `number` `number` int NOT NULL AUTO_INCREMENT COMMENT '编号'", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `parent_id` `parent_id` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `full_parent_id` `full_parent_id` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `img_url` `img_url` varchar(400) NULL", undefined);
        await queryRunner.query("ALTER TABLE `data_config` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `dict` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `parent_code` `parent_code` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `group_order` CHANGE `order_id` `order_id` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `remark` `remark` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `brand` `brand` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `group_remark` `group_remark` varchar(100) NULL", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `number` `number` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `code` `code` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `supplier` `supplier` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `remark` `remark` varchar(40) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `title` `title` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `img_url` `img_url` varchar(400) NULL", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `code` `code` varchar(100) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `zip` `zip` varchar(20) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `province` `province` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `city` `city` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `district` `district` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `address` `address` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `contact_information` `contact_information` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `contact_user_name` `contact_user_name` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `phone` `phone` varchar(40) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `email` `email` varchar(100) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `address_detail` `address_detail` varchar(200) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `zip_code` `zip_code` varchar(20) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `city` `city` varchar(20) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `contact` `contact` varchar(20) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `contact` `contact` varchar(20) NULL COMMENT '联系方式' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `city` `city` varchar(20) NULL COMMENT '城市' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `zip_code` `zip_code` varchar(20) NULL COMMENT '邮编' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_pay_card` CHANGE `address_detail` `address_detail` varchar(200) NULL COMMENT '具体地址' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `email` `email` varchar(100) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_info` CHANGE `phone` `phone` varchar(40) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `contact_user_name` `contact_user_name` varchar(40) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `contact_information` `contact_information` varchar(40) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `address` `address` varchar(200) NULL COMMENT '详细地址' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `district` `district` varchar(40) NULL COMMENT '区' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `city` `city` varchar(40) NULL COMMENT '城市' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `province` `province` varchar(40) NULL COMMENT '省' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `user_address` CHANGE `zip` `zip` varchar(20) NULL COMMENT '邮编' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `code` `code` varchar(100) NULL COMMENT '优惠码' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `img_url` `img_url` varchar(400) NULL COMMENT '图片' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `title` `title` varchar(200) NULL COMMENT '名称' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `promo_code` CHANGE `remark` `remark` varchar(40) NOT NULL COMMENT '备注' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `supplier` `supplier` varchar(40) NOT NULL COMMENT '供应商' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `code` `code` varchar(40) NOT NULL COMMENT '代号' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product_supplement` CHANGE `number` `number` varchar(40) NOT NULL COMMENT '订单编号' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `group_remark` `group_remark` varchar(100) NULL COMMENT '拼团描述(整箱)' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `brand` `brand` varchar(200) NULL COMMENT '品牌' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `remark` `remark` varchar(200) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `group_order` CHANGE `order_id` `order_id` varchar(40) NULL COMMENT '订单id' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `remark` `remark` varchar(40) NOT NULL COMMENT '备注' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `dict_type_first` CHANGE `parent_code` `parent_code` varchar(40) NULL COMMENT 'code' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `dict` CHANGE `remark` `remark` varchar(40) NOT NULL COMMENT '备注' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `data_config` CHANGE `remark` `remark` varchar(40) NOT NULL COMMENT '备注' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `img_url` `img_url` varchar(400) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `full_parent_id` `full_parent_id` varchar(200) NULL DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `parent_id` `parent_id` varchar(40) NULL COMMENT '父类id' DEFAULT ''", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `number` `number` int NOT NULL COMMENT '编号'", undefined);
        await queryRunner.query("ALTER TABLE `product` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD PRIMARY KEY (`id`)", undefined);
        await queryRunner.query("ALTER TABLE `product` CHANGE `number` `number` int NOT NULL AUTO_INCREMENT COMMENT '编号'", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `number` `number` int NOT NULL COMMENT '分类编号'", undefined);
        await queryRunner.query("ALTER TABLE `category` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `category` ADD PRIMARY KEY (`id`)", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `number` `number` int NOT NULL AUTO_INCREMENT COMMENT '分类编号'", undefined);
    }

}
