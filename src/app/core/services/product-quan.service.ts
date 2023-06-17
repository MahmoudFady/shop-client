import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductQuanService {
  cartItems = new BehaviorSubject<any | null>(null);
  updateCartItems(items: { [key: string]: number }[]) {
    this.cartItems.next(items);
  }
}
