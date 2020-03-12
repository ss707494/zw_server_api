import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("number", ["number"], {})
@Entity("product", { schema: "dw_server" })
export class Product {
  @Column("varchar", { primary: true, name: "id", length: 40 })
  id: string;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date | null;

  @Column("timestamp", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("int", { name: "is_delete", nullable: true, default: () => "'0'" })
  isDelete: number | null;

  @Column("varchar", { name: "category_id", length: 40 })
  categoryId: string;

  @Column("varchar", { name: "remark", nullable: true, length: 200 })
  remark: string | null;

  @Column("int", { name: "is_hot", nullable: true, default: () => "'0'" })
  isHot: number | null;

  @Column("int", { name: "is_new", nullable: true, default: () => "'0'" })
  isNew: number | null;

  @Column("int", { name: "is_enable", nullable: true, default: () => "'0'" })
  isEnable: number | null;

  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Column("float", {
    name: "stock",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  stock: number | null;

  @Column("varchar", {
    name: "unit",
    nullable: true,
    length: 10,
    default: () => "'g'"
  })
  unit: string | null;

  @Column("float", {
    name: "weight",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  weight: number | null;

  @Column("float", {
    name: "price_in",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceIn: number | null;

  @Column("float", {
    name: "price_out",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceOut: number | null;

  @Column("float", {
    name: "price_market",
    nullable: true,
    precision: 12,
    default: () => "'0'"
  })
  priceMarket: number | null;

  @Column("varchar", { name: "brand", nullable: true, length: 200 })
  brand: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "number" })
  number: number;

  @Column("int", { name: "is_group", nullable: true, default: () => "'0'" })
  isGroup: number | null;

  @Column("int", {
    name: "group_precision",
    nullable: true,
    default: () => "'1'"
  })
  groupPrecision: number | null;

  @Column("int", { name: "group_amount", nullable: true, default: () => "'1'" })
  groupAmount: number | null;

  @Column("varchar", { name: "group_remark", nullable: true, length: 100 })
  groupRemark: string | null;
}
