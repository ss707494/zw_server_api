#     id   varchar(40)  not null,
#     name varchar(200) null,
#     create_time timestamp null default current_timestamp,
#     update_time timestamp null,
#     is_delete bool default false,
#     primary key (id),
#     unique index id_unique (id asc) visible

create schema dw_server;

use dw_server;
create table user
(
    id          varchar(40)  not null,
    name        varchar(200) null,
    primary key (id),
    unique index id_unique (id asc) visible,
    unique (id, name),
    create_time timestamp    null default current_timestamp,
    update_time timestamp    null,
    is_delete   bool              default false,
    password    varchar(200) null
)
    comment = '用户';

create table category
(
    id             varchar(40)  not null,
    name           varchar(200) null,
    create_time    timestamp    null default current_timestamp,
    update_time    timestamp    null,
    is_delete      bool              default false,
    primary key (id),
    unique index id_unique (id asc) visible,
    is_enable      char              default '0',
    remark         varchar(200) null,
    sort           integer,
    parent_id      varchar(40) default '0' ,
    full_parent_id varchar(200) default '0',
    unique (id, name)
)
    comment = '商品分类';
