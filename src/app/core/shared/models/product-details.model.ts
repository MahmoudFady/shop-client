import { IProductItem } from './product-item.model';
import { IReview } from './review.model';

export interface IProductDetails extends IProductItem {
  images: string[];
  reviews: IReview[];
  description: string;
}
