import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { ProductQuanService } from '../../services/product-quan.service';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-product-quantity-controls',
  templateUrl: './product-quantity-controls.component.html',
  styleUrls: ['./product-quantity-controls.component.css'],
})
export class ProductQuantityControlsComponent {
  quantity = 0;
  @Input('productId') productId!: string;
  @Input('productPrice') productPrice!: number;
  authService = inject(AuthService);
  cartService = inject(CartService);
  productQuanService = inject(ProductQuanService);
  snackBarService = inject(SnackBarService);
  router = inject(Router);
  constructor() {}
  ngOnInit() {
    this.productQuanService.cartItems
      .pipe(skipWhile((items) => !items || !items[this.productId]))
      .subscribe({
        next: (result) => {
          console.log('fires');
          if (result) this.quantity = result[this.productId] || 0;
        },
      });
  }
  onBuy() {
    if (!this.authService.isAuthSaved()) {
      this.router.navigateByUrl('/auth/signin');
      return;
    }
    if (this.productQuanService.cartItems.value) {
      this.cartService.addProduct(this.productId, this.productPrice);
    } else {
      this.cartService.createCart(this.productId, this.productPrice);
    }
    this.snackBarService.display('product add to cart');
    this.quantity += 1;
  }
  onIncrQuantity() {
    this.cartService.incrPorductQuan(this.productId);
    this.snackBarService.display('one item added');

    this.quantity += 1;
  }
  onDecrQuantity() {
    this.cartService.decrPorductQuan(this.productId);
    this.snackBarService.display('one item removed');

    this.quantity -= 1;
  }
}
