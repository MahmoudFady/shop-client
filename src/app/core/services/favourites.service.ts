import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment.development';
import { IProductItem } from '../shared/models/product-item.model';
@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  favs!: {
    ids: string[];
    products: IProductItem[];
  };
  private readonly favs$ = new Subject<{
    ids: string[];
    products: IProductItem[];
  }>();
  private readonly favsEndPoint = environment.baseUrl + 'favs/';
  private http = inject(HttpClient);
  getUserFavs() {
    this.http
      .get<{ products: IProductItem[] }>(this.favsEndPoint + 'user')
      .pipe(map((res) => res.products))
      .subscribe({
        next: (products) => {
          let ids = products.map((p) => p._id);
          this.favs = { ids, products };
          this.favs$.next(this.favs);
        },
      });
  }
  popProduct(id: string) {
    this.http.delete(this.favsEndPoint + id).subscribe({
      next: (res) => {
        const index = this.favs.ids.indexOf(id);
        this.favs.products.splice(index, 1);
        this.favs.ids.splice(index, 1);
        this.favs$.next(this.favs);
      },
    });
  }
  pushProduct(product: IProductItem) {
    this.http.post(this.favsEndPoint + product._id, {}).subscribe({
      next: (res) => {
        this.favs.ids.push(product._id);
        this.favs.products.push(product);
        this.favs$.next(this.favs);
      },
    });
  }
  getFavsListener() {
    return this.favs$.asObservable();
  }
}
