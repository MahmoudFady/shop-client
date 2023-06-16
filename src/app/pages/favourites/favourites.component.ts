import { Component, inject } from '@angular/core';
import { FavouritesService } from 'src/app/core/services/favourites.service';
import { IProductItem } from 'src/app/core/shared/models/product-item.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent {
  products!: IProductItem[];
  favsService = inject(FavouritesService);
  ngOnInit() {
    this.favsService.getFavsListener().subscribe({
      next: (result) => {
        this.products = result.products;
      },
    });
  }
}
