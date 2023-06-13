import { Component, Input } from '@angular/core';
import { IProductItem } from '../../shared/models/product-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input('product') product!: IProductItem;
  constructor() {}
  ngOnInit() {}
}
