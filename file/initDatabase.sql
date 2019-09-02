#     id   varchar(40)  not null,
#     name varchar(200) null,
#     create_time timestamp null default current_timestamp,
#     update_time timestamp null,
#     is_delete int default 0,
#     primary key (id),

# USE mysql;
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dw88913830';
# FLUSH PRIVILEGES;

create schema dw_server;

use dw_server;

create table dw_server.user
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    primary key (id),
    unique index id_unique (id asc) visible,
    unique (id, name),
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   bool              default false,
    password    varchar(200) null comment '密码'
)
    comment = '用户';

create table dw_server.category
(
    id             varchar(40)  not null,
    name           varchar(200) not null,
    create_time    timestamp    null default current_timestamp,
    update_time    timestamp    null,
    is_delete      bool              default false,
    primary key (id),
    is_enable      char              default '0',
    remark         varchar(200) null,
    sort           integer,
    parent_id      varchar(40)       default '' comment '父类id',
    full_parent_id varchar(200)      default '' comment '',
    number         integer auto_increment comment '分类编号',
    user_id        varchar(40)  null comment '用户id',
    img_url        varchar(400)      default '',
    key (number)
#     unique (name)
)
    comment = '商品分类';
;
alter table dw_server.category
    add img_url varchar(400) default ''
;



# drop table dw_server.user;
# drop table dw_server.category;

# 产品

drop table dw_server.product;
create table dw_server.product
(
    id           varchar(40)  not null,
    name         varchar(200) not null,
    create_time  timestamp    null default current_timestamp,
    update_time  timestamp         default current_timestamp,
    is_delete    bool              default false,
    primary key (id),
    category_id  varchar(40)  not null comment '分类id',
#     foreign key (category_id) references dw_server.category (id),
    remark       varchar(200)      default '',
    is_hot       int               default 0 comment '热门',
    is_new       int               default 0 comment '新品',
    stock        float             default 0 comment '库存',
    unit         varchar(10)       default 'g' comment '单位',
    weight       float             default 0 comment '重量',
    price_in     float             default 0 comment '进货价',
    price_out    float             default 0 comment '售价',
    price_market float             default 0 comment '市场价',
    brand        varchar(200)      default '' comment '品牌',
    number       integer auto_increment comment '编号',
    key (number)
#     unique (name)
);

drop table dw_server.product_img;
create table dw_server.product_img
(
    id          varchar(40)  not null,
    name        varchar(200) not null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp         default current_timestamp,
    is_delete   bool              default false,
    primary key (id),
    product_id  varchar(40)  not null,
#     foreign key (product_id) references dw_server.product (id),
    number      int               default 1 comment '图片顺序',
#     unique (number, product_id),
    url         varchar(400)
);

#  2019年8月23日

alter table dw_server.category
    change is_enable is_enable int default 0
;
alter table dw_server.product
    add is_enable int default 0;

# 2019年8月27日
alter table dw_server.product
    add sort int default 0;
alter table dw_server.user
    add type int default 0;

# 2019年8月29日
drop table dw_server.shop_cart;
create table dw_server.shop_cart
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    primary key (id),
    user_id     varchar(40)  not null,
#     foreign key (user_id) references dw_server.user (id),
    product_id  varchar(40)  not null,
#     foreign key (product_id) references dw_server.product (id),
    number      int               default 1 comment '选中数量',
    is_next     int               default 0 comment '是否放入下一次'
#     unique (user_id, product_id)
);

# 2019年8月30日
# alter table dw_server.user
# drop index id ;
# alter table dw_server.user
# add unique (id, name, is_delete);
# alter table dw_server.category
# drop index name;
# alter table dw_server.category
# add unique (name, is_delete);
# alter table dw_server.product
#     drop foreign key product_ibfk_1
;
# alter table dw_server.product_img
# drop foreign key product_img_ibfk_1;

create table dw_server.user_info
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    user_id     varchar(40)  not null,
    phone       varchar(40)       default '',
    email       varchar(100)      default '',

    primary key (id)
);

create table dw_server.user_address
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   int               default 0,
    zip         varchar(20)       default '' comment '邮编',
    province    varchar(40)       default '',
    city        varchar(40)       default '',
    district    varchar(40)       default '',
    address     varchar(200)      default '' comment '详细地址',
    is_default  int               default 0,
    user_id     varchar(40)  not null,

    primary key (id)
);

# create schema
create table dw_server.order
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    user_id     varchar(40)  not null comment '用户id',
    number      varchar(40)       default '' comment '订单编号',

    primary key (id)
)
;

insert dw_server.user
    (id, name, password)
values (uuid(), 'admin', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim'),
       (uuid(), 'usero', '$2b$10$PscZTK6/mAdLCXhqp5hpBuoV4VdpAniob7/815d6SuPQpQdP50Nim')
;

insert dw_server.user_info
(id, name, phone, email, user_id)
values
(uuid(), 'ss707494', '88913433', 'ss707494@163.com', ?)
;
