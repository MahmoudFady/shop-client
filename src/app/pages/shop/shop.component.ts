import { Component, inject } from '@angular/core';
import { FiltersQueryService } from 'src/app/core/services/filter-query.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  query = '';
  filtersQueryService = inject(FiltersQueryService);
  ngOnInit() {
    this.filtersQueryService.getUpdatedQuery().subscribe({
      next: (query) => {
        this.query = query;
      },
    });
  }
}
