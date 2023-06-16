import { Component, Input, inject } from '@angular/core';
import { IProductItem } from '../../shared/models/product-item.model';
import { FavouritesService } from '../../services/favourites.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  isAuth = false;
  loved = false;
  @Input('product') product!: IProductItem;
  favsService = inject(FavouritesService);
  authService = inject(AuthService);
  router = inject(Router);
  snackBarService = inject(SnackBarService);
  constructor() {}
  ngOnInit() {
    this.isAuth = this.authService.isAuthSaved();
    if (this.isAuth)
      this.favsService.getFavsListener().subscribe({
        next: (favs) => {
          this.loved = favs.ids.includes(this.product._id);
        },
      });
  }
  toggleLove() {
    if (!this.isAuth) {
      this.router.navigateByUrl('/auth/signin');
      return;
    }
    this.loved
      ? this.favsService.popProduct(this.product._id)
      : this.favsService.pushProduct(this.product);
    this.loved = !this.loved;
    this.snackBarService.display('favs products updated');
  }
}
