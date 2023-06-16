import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from '../shared/models/cart.model';
import { environment } from 'src/environments/environment.development';
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly baseUrl = environment.baseUrl + 'cart/';
  private cart$ = new BehaviorSubject<ICart | null>(null);
  constructor(private http: HttpClient) {}
  private cartObserver = {
    next: (response: { cart: ICart }) => {
      this.cart$.next(response.cart);
    },
    error: (err: any) => {},
  };
  getUserCart() {
    this.http.get<{ cart: ICart }>(this.baseUrl).subscribe(this.cartObserver);
  }
  getProductInCart() {
    return this.cart$;
  }
  addProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.post<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  removeProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.delete<{ cart: ICart }>(url).subscribe(this.cartObserver);
  }
  incrPorductQuan(id: string) {
    const url = `${this.baseUrl}increaseQuantity/${id}`;
    this.http.patch<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  decrPorductQuan(id: string) {
    const url = `${this.baseUrl}decreaseQuantity/${id}`;
    this.http.delete<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  getUpdatedCartListener() {
    return this.cart$.asObservable();
  }
}
