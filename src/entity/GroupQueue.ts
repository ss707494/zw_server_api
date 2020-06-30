import {Column, Entity, Generated, ManyToOne} from "typeorm"
import {Field, InputType, ObjectType} from 'type-graphql'
import {Product} from './Product'

@InputType('GroupQueueItemInput')
@ObjectType()
@Entity("group_queue", { schema: "dw_server" })
export class GroupQueue {

  @Field()
  @Column("varchar", { primary: true, name: "id", length: 40 })
  @Generated('uuid')
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

  @Field()
  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Field()
  @Column("varchar", { name: "product_id", length: 40 })
  productId: string;

  @Field()
  @Column("int", { name: "fill_amount", nullable: true, default: () => "'0'" })
  fillAmount: number | null;

  @Field(returns => Product)
  @ManyToOne(type => Product, object => object.groupQueue)
  product: Product

}
