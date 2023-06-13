import { Discount } from './discount.model';
export interface IProductItem {
  _id: string;
  title: string;
  brand: string;
  price: number;
  stock: number;
  discount: Discount;
  thumbnail: string;
  category: string;
  priceAfterDiscount: string;
  avgRating: number;
}
