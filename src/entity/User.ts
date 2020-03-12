import {Column, Entity, JoinColumn, OneToOne} from "typeorm"
import {Field, ObjectType} from "type-graphql"
import {UserInfo} from "./UserInfo"

@ObjectType()
@Entity("user", { schema: "dw_server" })
export class User {
  @Field()
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Field()
  @Column("varchar", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Field()
  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Field({nullable: true})
  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Field()
  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Field()
  @Column("varchar", { name: "password", nullable: true, length: 200 })
  password: string | null;

  @Field()
  @Column("int", { name: "type", nullable: true, default: () => "'0'" })
  type: number | null;

  @Field({nullable: true})
  @OneToOne(type1 => UserInfo)
  @JoinColumn()
  userInfo: UserInfo | null;

}
