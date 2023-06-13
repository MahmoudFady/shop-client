import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IProductItem } from '../shared/models/product-item.model';
import { IProductDetails } from '../shared/models/product-details.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productEndPoint = environment.baseUrl + 'products/';
  private http = inject(HttpClient);
  constructor() {}
  getProductByFilters(query: string, pageIndex = 1, pageSize = 16) {
    const endPoint = `${this.productEndPoint}filter/?${query}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get<{
      message: string;
      length: number;
      products: IProductItem[];
    }>(endPoint);
  }
  getProductDetails(id: string) {
    return this.http.get<{ message: string; product: IProductDetails }>(
      this.productEndPoint + id
    );
  }
}
