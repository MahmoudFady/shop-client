import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { IProductDetails } from 'src/app/core/shared/models/product-details.model';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css'],
})
export class ProductSingleComponent {
  product!: IProductDetails;
  loading = false;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  constructor() {}
  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.loading = true;
        this.productService.getProductDetails(params['id']).subscribe({
          next: (res) => {
            this.product = res.product;
            this.loading = false;
          },
        });
      },
    });
  }
}
