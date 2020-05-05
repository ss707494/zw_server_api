#     id   varchar(40)  not null,
#     name varchar(200) null,
#     create_time timestamp null default current_timestamp,
#     update_time timestamp null,
#     is_delete int default 0,
#     primary key (id),

insert into dw_server.dict_type_first
(id, name, code, sort, update_time)
values (uuid(), '上架类型', 'ShelvesType', 1, current_timestamp),
       (uuid(), '重量单位', 'WeightUnit', 2, current_timestamp),
       (uuid(), '包装单位', 'PackingUnit', 3, current_timestamp),
       (uuid(), '拆包单位', 'UnpackingUnit', 4, current_timestamp)
;
insert into dw_server.dict_type_first
(id, name, code, sort, update_time)
values (uuid(), '用户等级', 'UserLevel', 5, current_timestamp)
;
insert into dw_server.dict_type_first
(id, name, code, sort, update_time)
values (uuid(), '分团精度', 'GroupPrecision', 6, current_timestamp)
;
insert into dw_server.dict_type_first
(id, name, code, sort, update_time)
values (uuid(), '送货类型', 'DeliveryType', 7, current_timestamp)
;

insert into dw_server.dict
(id, name, update_time, dict_type_code, code, sort) values
(uuid(), '新品', current_timestamp, 'ShelvesType', 'is_new', 1),
(uuid(), '热门', current_timestamp, 'ShelvesType', 'is_hot', 2)
;
