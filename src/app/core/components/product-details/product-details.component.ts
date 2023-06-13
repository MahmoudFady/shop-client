import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProductDetails } from '../../shared/models/product-details.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input('product') product!: IProductDetails;
  displayImage(src: string) {
    this.product.thumbnail = src;
  }
}
