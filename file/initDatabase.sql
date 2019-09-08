#     id   varchar(40)  not null,
#     name varchar(200) null,
#     create_time timestamp null default current_timestamp,
#     update_time timestamp null,
#     is_delete int default 0,
#     primary key (id),

use dw_server;
create table dw_server.user
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    password    varchar(200) null comment '密码',
    type int default 0,

    primary key (id)
)
    comment = '用户';

create table dw_server.category
(
    id             varchar(40)  not null,
    name           varchar(200) not null,
    create_time    timestamp    null default current_timestamp,
    update_time    timestamp    null,
    is_delete      int               default 0,
    primary key (id),
    is_enable      int              default 0,
    remark         varchar(200) null,
    sort           integer default 0,
    parent_id      varchar(40)       default '' comment '父类id',
    full_parent_id varchar(200)      default '' comment '',
    number         integer auto_increment comment '分类编号',
    user_id        varchar(40)  null comment '用户id',
    img_url        varchar(400)      default '',
    key (number)
)
    comment = '商品分类';


create table dw_server.product
(
    id           varchar(40)  not null,
    name         varchar(200) not null,
    create_time  timestamp    null default current_timestamp,
    update_time  timestamp    null,
    is_delete    int               default false,
    primary key (id),
    category_id  varchar(40)  not null comment '分类id',
    remark       varchar(200)      default '',
    is_hot       int               default 0 comment '热门',
    is_new       int               default 0 comment '新品',
    is_enable      int              default 0,
    sort           integer default 0,
    stock        float             default 0 comment '库存',
    unit         varchar(10)       default 'g' comment '单位',
    weight       float             default 0 comment '重量',
    price_in     float             default 0 comment '进货价',
    price_out    float             default 0 comment '售价',
    price_market float             default 0 comment '市场价',
    brand        varchar(200)      default '' comment '品牌',
    number       integer auto_increment comment '编号',
    key (number)
);

create table dw_server.product_img
(
    id          varchar(40)  not null,
    name        varchar(200) not null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default false,
    primary key (id),
    product_id  varchar(40)  not null,
    number      int               default 1 comment '图片顺序',
    url         varchar(400)
);

create table dw_server.shop_cart
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    user_id     varchar(40)  not null,
    product_id  varchar(40)  not null,
    number      int               default 1 comment '选中数量',
    is_next     int               default 0 comment '是否放入下一次',

    primary key (id)
);

create table dw_server.user_info
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete              int               default 0,
    user_id     varchar(40)  not null,
    phone       varchar(40)       default '',
    email       varchar(100)      default '',

    primary key (id)
) comment '用户基本信息';

create table dw_server.user_address
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    zip         varchar(20)       default '' comment '邮编',
    province    varchar(40)       default '' comment '省',
    city        varchar(40)       default '' comment '城市',
    district    varchar(40)       default '' comment '区',
    address     varchar(200)      default '' comment '详细地址',
    is_default  int               default 0,
    user_id     varchar(40)  not null,
    contact_information varchar(40) default '',

    primary key (id)
);

create table dw_server.r_order_user
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    user_id     varchar(40)  not null comment '用户id',
    order_id    varchar(40)  not null comment '订单id',

    primary key (id)
)
;

create table dw_server.r_order_product
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,

    order_id    varchar(40)  not null comment '订单id',
    product_id  varchar(40)  not null comment '产品id',

    primary key (id)
);

create table dw_server.order_info
(
    id                     varchar(40)  not null,
    name                   varchar(200) null,
    create_time            timestamp    null default current_timestamp,
    update_time            timestamp    null,
    is_delete              int               default 0,

    number                 varchar(40)  not null comment '订单编号',
    state                  int               default 1 comment '订单状态',
    actually_paid          float             default 0 comment '实付',
    address_id             varchar(40)  not null comment '送货地址id',
    payment_method_card_id varchar(40)  not null comment '支付方式信用卡id',
    subtotal               float             default 0 comment '小计',
    coupon_discount        float             default 0 comment '优惠券折扣',
    vip_discount           float             default 0 comment '达人卡折扣',
    transportation_costs   float             default 0 comment '运费',
    sale_tax               float             default 0 comment '消费税',

    primary key (id)
)
;

create table dw_server.user_pay_card
(
    id                     varchar(40)  not null,
    name                   varchar(200) null,
    create_time            timestamp    null default current_timestamp,
    update_time            timestamp    null,
    is_delete              int               default 0,

    number varchar(40) not null,
    code varchar(10) not null,
    user_name varchar(50) not null ,
    address_detail varchar(200) default '',
    zip_code varchar(20) default '',
    city varchar(20) default '',
    contact varchar(20) default '',

    primary key (id)
) comment '支付信用卡信息';

insert dw_server.user
    (id, name, password)
values (uuid(), 'admin', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim'),
       (uuid(), 'usero', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim')
;
insert dw_server.user_info
    (id, name, phone, email, user_id)
values (uuid(), 'ss707494', '88913433', 'ss707494@163.com', ?)
;

