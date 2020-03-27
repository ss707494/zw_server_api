import {Column, Entity, Generated} from "typeorm"
import {Field, InputType, ObjectType} from "type-graphql"
import {JsonScalar} from "../type_graphql/types/json"

@InputType('DataConfigItemInput')
@ObjectType()
@Entity("data_config", {schema: "dw_server"})
export class DataConfig {
  @Field()
  @Column("varchar", {primary: true, name: "id", length: 40})
  @Generated("uuid")
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
  @Column("varchar", {name: "type", length: 40})
  type: string

  @Field(returns => JsonScalar)
  @Column("json", {name: "value"})
  value: object

  @Field()
  @Column("varchar", {name: "remark", length: 40, default: ''})
  remark: string

}
