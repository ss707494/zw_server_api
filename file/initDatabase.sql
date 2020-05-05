create schema dw_server;

use dw_server;

create table category
(
    id varchar(40) not null
        primary key,
    name varchar(200) not null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    is_enable int default 0 null,
    remark varchar(200) null,
    sort int default 0 null,
    parent_id varchar(40) null,
    full_parent_id varchar(200) null,
    user_id varchar(40) null comment '用户id',
    img_url varchar(400) null,
    number int not null,
    parentCategoryId varchar(40) null,
    constraint FK_9e5435ba76dbc1f1a0705d4db43
        foreign key (parentCategoryId) references category (id)
)
    comment '商品分类';

create table data_config
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    type varchar(40) not null,
    value json not null,
    remark varchar(40) default '' not null
)
    comment '配置数据';

create table dict_type_first
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    parent_code varchar(40) null,
    code varchar(40) not null comment 'code',
    sort int default 0 null,
    remark varchar(40) default '' not null
)
    comment '字典数据分类';

create table dict
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    is_disable int default 0 null,
    dict_type_code varchar(40) not null comment 'dictTypeCode',
    code varchar(40) not null comment 'code',
    sort int default 0 null,
    remark varchar(40) default '' not null,
    dictTypeFirstId varchar(40) null,
    constraint FK_c48d8caabae5789b3dbc668201c
        foreign key (dictTypeFirstId) references dict_type_first (id)
)
    comment '字典数据';

create table group_order
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    group_queue_id varchar(40) not null,
    user_id varchar(40) not null,
    order_group_amount int default 0 null comment '拼团数量',
    order_id varchar(40) null
)
    comment '拼团订单';

create table group_queue
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    product_id varchar(40) not null,
    fill_amount int default 0 null comment '已经成团数量'
)
    comment '团购队列';

create table help_info_type
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null
)
    comment '用户中心-帮助信息';

create table migrations
(
    id int auto_increment
        primary key,
    timestamp bigint not null,
    name varchar(255) not null
);

create table product
(
    id varchar(40) not null
        primary key,
    name varchar(200) not null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    category_id varchar(40) not null comment '分类id',
    remark varchar(200) null,
    is_hot int default 0 null comment '热门',
    is_new int default 0 null comment '新品',
    is_enable int default 0 null,
    sort int default 0 null,
    stock float default 0 null comment '库存',
    unit varchar(10) default 'g' null comment '单位',
    weight float default 0 null comment '重量',
    price_in float default 0 null comment '进货价',
    price_out float default 0 null comment '售价',
    price_market float default 0 null comment '市场价',
    brand varchar(200) null,
    is_group int default 0 null comment '是否是拼团商品',
    group_precision int default 1 null comment '拼团商品精度',
    group_amount int default 1 null comment '拼团数量',
    group_remark varchar(100) null,
    shelvesTypes varchar(200) default '' null,
    groupAmountUnit varchar(20) default '' null,
    packingUnit varchar(10) default '' null,
    number int default 0 not null
);

create table product_img
(
    id varchar(40) not null
        primary key,
    name varchar(200) not null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    product_id varchar(40) not null,
    number int default 1 null comment '图片顺序',
    url varchar(400) null
);

create table product_supplement
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    state int default 1 null comment '补货订单状态 1: 配货中 2: 已完成',
    amount float default 0 null comment '金额',
    number varchar(40) not null,
    code varchar(40) default '' not null,
    supplier varchar(40) default '' not null,
    user_id varchar(40) not null
)
    comment '补货订单';

create table promo_code
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    remark varchar(40) not null,
    title varchar(200) null,
    discount_type varchar(20) not null comment '折扣类型',
    discount_amount float default 0 not null comment '折扣数量',
    discount_condition varchar(20) default 'No' null comment '使用条件',
    discount_condition_amount float default 0 null comment '使用条件订单金额',
    product_category varchar(40) null comment '使用产品',
    img_url varchar(400) null,
    effective_date_start timestamp null comment '有效日期-开始',
    effective_date_end timestamp null comment '有效日期-开始',
    promo_code_type varchar(40) not null comment '优惠码类型 优惠码(PromoCode) 达人卡(DarenCard)',
    reuse_times int default 1 null,
    code varchar(100) null,
    isDisable int default 0 null
)
    comment '优惠码';

create table r_product_supplement
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    supplement_id varchar(40) not null,
    product_id varchar(40) not null,
    count float default 0 null comment '补货数量',
    amount float default 0 null comment '补货金额',
    supplier varchar(40) not null comment '供应商',
    remark varchar(40) not null comment '备注',
    lastOutAmount float default 0 null
)
    comment '补货商品关联表';

create table shop_cart
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    user_id varchar(40) not null,
    product_id varchar(40) not null,
    number int default 1 null comment '选中数量',
    is_next int default 0 null comment '是否放入下一次'
);

create table user_address
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    zip varchar(20) null,
    province varchar(40) null,
    city varchar(40) null,
    district varchar(40) null,
    address varchar(200) null,
    is_default int default 0 null,
    user_id varchar(40) not null,
    contact_information varchar(40) null,
    contact_user_name varchar(40) null
);

create table user_info
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    user_id varchar(40) not null,
    phone varchar(40) null,
    email varchar(100) null,
    userLevel varchar(255) default '' not null
)
    comment '用户基本信息';

create table user
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    password varchar(200) null comment '密码',
    type int default 0 null,
    userInfoId varchar(40) null,
    constraint REL_5c634c605ff93c4ac0f1be62f0
        unique (userInfoId),
    constraint FK_5c634c605ff93c4ac0f1be62f00
        foreign key (userInfoId) references user_info (id)
)
    comment '用户';

create table r_order_user
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    user_id varchar(40) not null comment '用户id',
    order_id varchar(40) not null comment '订单id',
    userId varchar(40) null,
    constraint FK_9bf12347721050a8e91ce7afa66
        foreign key (userId) references user (id)
);

create table user_pay_card
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    user_id varchar(40) not null,
    number varchar(40) not null comment '卡号',
    code varchar(10) not null comment '四位号码',
    user_name varchar(50) not null comment '姓名',
    address_detail varchar(200) null,
    zip_code varchar(20) null,
    city varchar(20) null,
    contact varchar(20) null,
    is_default int default 0 null,
    expirationTime timestamp null
)
    comment '支付信用卡信息';

create table order_info
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    number varchar(40) not null comment '订单编号',
    state int default 1 null comment '1:代付款 2:已付款 3:已发货 4:已收货 5:已取消 6:已完成 7:已退回',
    actually_paid float default 0 null comment '实付',
    address_id varchar(40) not null comment '送货地址id',
    payment_method_card_id varchar(40) not null comment '支付方式信用卡id',
    subtotal float default 0 null comment '小计',
    coupon_discount float default 0 null comment '优惠券折扣',
    vip_discount float default 0 null comment '达人卡折扣',
    transportation_costs float default 0 null comment '运费',
    sale_tax float default 0 null comment '消费税',
    order_id varchar(40) null,
    discount_product_total float default 0 null comment '拼团折扣价格',
    finish_time timestamp null comment '订单完成时间',
    userId varchar(40) null,
    userAddressId varchar(40) null,
    pickUpTime timestamp null comment '取货时间',
    generateCoin float default 0 null comment '订单产生达人币',
    deductCoin float default 0 null comment '订单抵扣达人币',
    pickUpType varchar(255) default '' null comment '取货方式 Self: 自提 Delivery: 配送',
    userPayCardId varchar(40) null,
    currentUserLevel varchar(255) default '' not null,
    selfAddressId varchar(40) default '' not null,
    constraint FK_7661050b8720b3a23d1b973115f
        foreign key (userId) references user (id),
    constraint FK_afd04ff7968731c29fb133d782f
        foreign key (userAddressId) references user_address (id),
    constraint FK_db1c30fc066b674e5445e9e1d3d
        foreign key (userPayCardId) references user_pay_card (id)
);

create table r_order_product
(
    id varchar(40) not null
        primary key,
    name varchar(200) null,
    create_time timestamp default CURRENT_TIMESTAMP null,
    update_time timestamp null,
    is_delete int default 0 null,
    order_id varchar(40) not null comment '订单id',
    product_id varchar(40) not null comment '产品id',
    count float default 0 null,
    orderInfoId varchar(40) null,
    productId varchar(40) null,
    dealPrice float default 0 null,
    constraint FK_52f84b5285f77bbc4978f3306b8
        foreign key (orderInfoId) references order_info (id),
    constraint FK_acdf297e8a058bec0ceea8ad4b3
        foreign key (productId) references product (id)
);

