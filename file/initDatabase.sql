#     id   varchar(40)  not null,
#     name varchar(200) null,
#     create_time timestamp null default current_timestamp,
#     update_time timestamp null,
#     is_delete int default 0,
#     primary key (id),

create schema dw_server;
use dw_server;
create table dw_server.user
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    password    varchar(200) null comment '密码',
    type        int               default 0,

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
    is_enable      int               default 0,
    remark         varchar(200) null,
    sort           integer           default 0,
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
    is_enable    int               default 0,
    sort         integer           default 0,
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
    is_delete   int               default 0,
    user_id     varchar(40)  not null,
    phone       varchar(40)       default '',
    email       varchar(100)      default '',

    primary key (id)
) comment '用户基本信息';

create table dw_server.user_address
(
    id                  varchar(40)  not null,
    name                varchar(200) null,
    create_time         timestamp    null default current_timestamp,
    update_time         timestamp    null,
    is_delete           int               default 0,
    zip                 varchar(20)       default '' comment '邮编',
    province            varchar(40)       default '' comment '省',
    city                varchar(40)       default '' comment '城市',
    district            varchar(40)       default '' comment '区',
    address             varchar(200)      default '' comment '详细地址',
    is_default          int               default 0,
    user_id             varchar(40)  not null,
    contact_information varchar(40)       default '',

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
    order_id               varchar(40)  not null comment '订单id',

    primary key (id)
)
;

create table dw_server.user_pay_card
(
    id             varchar(40)  not null,
    name           varchar(200) null,
    create_time    timestamp    null default current_timestamp,
    update_time    timestamp    null,
    is_delete      int               default 0,

    user_id        varchar(40)  not null,
    number         varchar(40)  not null comment '卡号',
    code           varchar(10)  not null comment '四位号码',
    user_name      varchar(50)  not null comment '姓名',
    address_detail varchar(200)      default '' comment '具体地址',
    zip_code       varchar(20)       default '' comment '邮编',
    city           varchar(20)       default '' comment '城市',
    contact        varchar(20)       default '' comment '联系方式',
    is_default     int               default 0,

    primary key (id)
) comment '支付信用卡信息';

insert dw_server.user
    (id, name, password)
values (uuid(), 'admin', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim'),
       (uuid(), 'usero', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim')
;
select id, name
from dw_server.user;
insert dw_server.user_info
    (id, name, phone, email, user_id)
values (uuid(), 'ss707494', '88913433', 'ss707494@163.com', ?)
;

alter table dw_server.user_address
    add contact_user_name varchar(40) default '';
alter table dw_server.r_order_product
    add count float default 0;
alter table dw_server.order_info
    change order_id order_id varchar(40) null;

alter table dw_server.order_info
    change state state int default 1 comment '1:代付款 2:已付款 3:已发货 4:已收货 5:已取消 6:已完成 7:已退回';

create table dw_server.help_info_type
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,

    primary key (id)
)
    comment '用户中心-帮助信息';

alter table dw_server.product
    add is_group int default 0 comment '是否是拼团商品';

alter table dw_server.product
    add group_precision int default 1 comment '拼团商品精度';

alter table dw_server.product
    add group_amount int default 1 comment '拼团数量';

create table dw_server.group_queue
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,

    product_id  varchar(40)  not null,
    fill_amount int               default 0 comment '已经成团数量',

    primary key (id)
)
    comment '团购队列';

create table dw_server.group_order
(
    id                 varchar(40)  not null,
    name               varchar(200) null,
    create_time        timestamp    null default current_timestamp,
    update_time        timestamp    null,
    is_delete          int               default 0,

    group_queue_id     varchar(40)  not null,
    user_id            varchar(40)  not null,
    order_group_amount int               default 0 comment '拼团数量',
    primary key (id)
)
    comment '拼团订单';

alter table dw_server.product
    add group_remark varchar(100) default '' comment '拼团描述(整箱)';

alter table dw_server.group_order
    add order_id varchar(40) default '' comment '订单id';

alter table dw_server.order_info
    add discount_product_total float default 0 comment '拼团折扣价格';


--  2019年11月28日
create table dw_server.product_supplement
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null     default current_timestamp,
    update_time timestamp    null,
    is_delete   int                   default 0,

    state       int                   default 1 comment '补货订单状态 1: 配货中',
    amount      float                 default 0 comment '金额',
    number      varchar(40)  not null default '' comment '订单编号',
    code        varchar(40)  not null default '' comment '代号',
    supplier    varchar(40)  not null default '' comment '供应商',

    user_id     varchar(40)  not null,
    primary key (id)
)
    comment '补货订单';

create table dw_server.r_product_supplement
(
    id            varchar(40)  not null,
    name          varchar(200) null,
    create_time   timestamp    null default current_timestamp,
    update_time   timestamp    null,
    is_delete     int               default 0,

    supplement_id varchar(40)  not null,
    product_id    varchar(40)  not null,
    count         float             default 0 comment '补货数量',
    amount        float             default 0 comment '补货金额',
    supplier      varchar(40)  not null comment '供应商',
    remark        varchar(40)  not null comment '备注',

    primary key (id)
)
    comment '补货商品关联表';

create table dw_server.dict_type_first
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,

    parent_code varchar(40)       default '' comment 'code',
    code        varchar(40)  not null comment 'code',
    sort        integer           default 0,
    remark      varchar(40)       default '' not null comment '备注',

    primary key (id)
)
    comment '字典数据分类';

drop table dw_server.dict_type_first;

create table dw_server.dict
(
    id             varchar(40)  not null,
    name           varchar(200) null,
    create_time    timestamp    null default current_timestamp,
    update_time    timestamp    null,
    is_delete      int               default 0,

    is_disable     int               default 0,
    dict_type_code varchar(40)  not null comment 'dictTypeCode',
    code           varchar(40)  not null comment 'code',
    sort           integer           default 0,
    remark         varchar(40)       default '' not null comment '备注',

    primary key (id)
)
    comment '字典数据';


create table dw_server.data_config
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,

    type        varchar(40)  not null,
    value       json         not null,
    remark      varchar(40)       default '' not null comment '备注',

    primary key (id)
)
    comment '配置数据';

create table dw_server.promo_code
(
    id                        varchar(40)  not null,
    name                      varchar(200) null,
    create_time               timestamp    null     default current_timestamp,
    update_time               timestamp    null,
    is_delete                 int                   default 0,
    remark                    varchar(40)           default '' not null comment '备注',

    title                     varchar(200)          default '' comment '名称',
    discount_type             varchar(20)  not null comment '折扣类型',
    discount_amount           float        not null default 0 comment '折扣数量',
    discount_condition        varchar(20)           default 'No' comment '使用条件',
    discount_condition_amount float                 default 0 comment '使用条件订单金额',
    product_category          varchar(40) comment '使用产品',
    img_url                   varchar(400)          default '' comment '图片',
    effective_date_start      timestamp    null comment '有效日期-开始',
    effective_date_end        timestamp    null comment '有效日期-开始',

    promo_code_type           varchar(40)  not null comment '优惠码类型 优惠码(PromoCode) 达人卡(DarenCard)',

    reuse_times               int                   default 1,

    code                      varchar(100)          default '' comment '优惠码',

    primary key (id)
)
    comment '优惠码';

alter table dw_server.order_info add finish_time timestamp null comment '订单完成时间';

alter table dw_server.product_supplement modify state int default 1 null comment '补货订单状态 1: 配货中 2: 已完成';

