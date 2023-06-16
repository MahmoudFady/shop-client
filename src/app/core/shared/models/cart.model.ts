import { IProductItem } from './product-item.model';

export interface ICart {
  products: {
    product: IProductItem;
    quantity: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
  }[];
  totalProducts: number;
  totalQuantity: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
}
