import {Column, Entity, OneToOne} from "typeorm"
import {Field, ObjectType} from "type-graphql"
import {User} from "./User"

@ObjectType()
@Entity("user_info", { schema: "dw_server" })
export class UserInfo {
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

  @Field()
  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  @Field()
  isDelete: number | null;

  @Column("varchar", { name: "user_id", length: 40 })
  @Field()
  userId: string;

  @Column("varchar", { name: "phone", nullable: true, length: 40 })
  @Field()
  phone: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  @Field()
  email: string | null;

  @OneToOne(type1 => User, object => object.userInfo)
  @Field(returns => User, {nullable: true})
  user: User | null;

}
