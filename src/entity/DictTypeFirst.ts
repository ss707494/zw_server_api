import {Column, Entity, OneToMany} from "typeorm"
import {Field, ObjectType} from "type-graphql"
import {Dict} from "./Dict"

@ObjectType()
@Entity("dict_type_first", {schema: "dw_server"})
export class DictTypeFirst {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  id: string

  @Field()
  @Column("varchar", {name: "name", nullable: true, length: 200})
  name: string | null

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null

  @Field()
  @Column("timestamp", {name: "update_time", nullable: true})
  updateTime: Date | null

  @Field()
  @Column("int", {name: "is_delete", nullable: true, default: () => "'0'"})
  isDelete: number | null

  @Field()
  @Column("varchar", {name: "parent_code", nullable: true, length: 40})
  parentCode: string | null

  @Field()
  @Column("varchar", {name: "code", length: 40})
  code: string

  @Field()
  @Column("int", {name: "sort", nullable: true, default: () => "'0'"})
  sort: number | null

  @Field()
  @Column("varchar", {name: "remark", length: 40})
  remark: string

  @OneToMany(type => Dict, object => object.dictTypeFirst)
  dict: Dict | null
}
