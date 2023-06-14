import { Component, Input, inject } from '@angular/core';
import { IProductItem } from '../../shared/models/product-item.model';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  loved = false;
  @Input('product') product!: IProductItem;
  favsService = inject(FavouritesService);
  constructor() {}
  ngOnInit() {
    this.loved = this.favsService.favs.ids.includes(this.product._id);
    this.favsService.getFavsListener().subscribe({
      next: (result) => {
        this.loved = result.ids.includes(this.product._id);
      },
    });
  }
  toggleLove() {
    this.loved
      ? this.favsService.popProduct(this.product._id)
      : this.favsService.pushProduct(this.product);
    this.loved = !this.loved;
  }
}
