import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICart } from '../shared/models/cart.model';
import { environment } from 'src/environments/environment.development';
import { ProductQuanService } from './product-quan.service';
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly baseUrl = environment.baseUrl + 'cart/';
  private cart$ = new BehaviorSubject<ICart | null>(null);
  private productQuanService = inject(ProductQuanService);
  constructor(private http: HttpClient) {}
  private cartObserver = {
    next: (response: { cart: ICart }) => {
      this.cart$.next(response.cart);
      if (response.cart) {
        const items: any = {};
        console.log(response.cart.products);
        response.cart.products.forEach((item) => {
          items[item.product._id] = item.quantity;
        });
        this.productQuanService.updateCartItems(items);
      }
    },
    error: (err: any) => {},
  };
  getUserCart() {
    this.http.get<{ cart: ICart }>(this.baseUrl).subscribe(this.cartObserver);
  }
  getProductInCart() {
    return this.cart$;
  }
  createCart(productId: string, productPrice: number) {
    const url = `${this.baseUrl}new/${productId}`;
    this.http
      .post<{ cart: ICart }>(
        url,
        {},
        {
          params: { productPrice },
        }
      )
      .subscribe(this.cartObserver);
  }
  addProduct(id: string, productPrice: number) {
    const url = `${this.baseUrl}${id}`;
    this.http
      .post<{ cart: ICart }>(
        url,
        {},
        {
          params: { productPrice },
        }
      )
      .subscribe(this.cartObserver);
  }
  removeProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.delete<{ cart: ICart }>(url).subscribe(this.cartObserver);
  }
  updateProductQuan(
    productId: string,
    productPrice: number,
    increaser: number
  ) {
    const url = `${this.baseUrl}${productId}`;
    this.http
      .patch<{ cart: ICart }>(
        url,
        {},
        {
          params: { productPrice, increaser },
        }
      )
      .subscribe(this.cartObserver);
  }
  getUpdatedCartListener() {
    return this.cart$.asObservable();
  }
  clearCart() {
    this.cart$.next(null);
    this.productQuanService.updateCartItems([]);
  }
}
