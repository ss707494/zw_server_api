import {Column, Entity, ManyToOne} from "typeorm"
import {Field, ObjectType} from "type-graphql"
import {DictTypeFirst} from "./DictTypeFirst"

@ObjectType()
@Entity("dict", {schema: "dw_server"})
export class Dict {
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
  @Column("int", {name: "is_disable", nullable: true, default: () => "'0'"})
  isDisable: number | null

  @Field()
  @Column("varchar", {name: "dict_type_code", length: 40})
  dictTypeCode: string

  @Field()
  @Column("varchar", {name: "code", length: 40})
  code: string

  @Field()
  @Column("int", {name: "sort", nullable: true, default: () => "'0'"})
  sort: number | null

  @Field()
  @Column("varchar", {name: "remark", length: 40, default: ''})
  remark: string

  @ManyToOne(type => DictTypeFirst, object => object.dict)
  dictTypeFirst: DictTypeFirst | null

}
