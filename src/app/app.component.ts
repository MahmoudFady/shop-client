import { Component, inject } from '@angular/core';
import { FavouritesService } from './core/services/favourites.service';
import { AuthService } from './core/services/auth.service';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-client';
  private favsService = inject(FavouritesService);
  private authService = inject(AuthService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.authService.isAuthSaved()) {
      this.favsService.getUserFavs();
      this.cartService.getUserCart();
    }
  }
}
