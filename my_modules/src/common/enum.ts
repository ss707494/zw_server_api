export enum PromoCodeTypeEnum {
  DarenCard = 'DarenCard',
  PromoCode = 'PromoCode',
}

export enum DiscountTypeEnum {
  Percentage = 'Percentage',
  Amount = 'Amount',
}

export enum SS {
  SS,
  SS2,
}

export enum DiscountConditionEnum {
  No = 'No',
  Amount = 'Amount',
}

export enum ProductSupplement {
  _,
  Pending,
  Finish,
}

export const ProductSupplementString: any = {
  1: '配货中',
  2: '已完成',
}

export enum OrderState {
  Ordered = 1,
  Paid = 2,
  Picking = 3,
  PickedUp = 4,
  Finish = 5,
  Cancel = 6,
}

export const orderStateKeys: string[] = Object.values(OrderState).filter(value => typeof (value) === 'string') as string[]
