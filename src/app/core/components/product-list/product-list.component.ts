import { Component, Input, SimpleChange, inject } from '@angular/core';
import { IProductItem } from '../../shared/models/product-item.model';
import { ProductService } from '../../services/product.service';
import { PageEvent } from '@angular/material/paginator';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  loading = false;
  length!: number;
  limit = 16;
  @Input('query') query = '';
  products: IProductItem[] = [];
  productService = inject(ProductService);
  cartService = inject(CartService);
  ngOnChanges(change: SimpleChange) {
    this.loading = true;
    this.getProducts();
  }
  constructor() {}
  ngOnInit() {}
  getProducts(pageIndex = 1) {
    this.productService
      .getProductByFilters(this.query, pageIndex, this.limit)
      .subscribe({
        next: (res) => {
          this.products = res.products;
          this.loading = false;
          this.length = res.length;
        },
      });
  }
  onPagination(page: PageEvent) {
    let { pageIndex, pageSize } = page;
    pageIndex += 1;
    this.limit = pageSize;
    this.loading = true;
    this.getProducts(pageIndex);
  }
}
