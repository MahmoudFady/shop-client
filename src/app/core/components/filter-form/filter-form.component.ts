import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersQueryService } from '../../services/filter-query.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent {
  panelOpenState = true;
  categories!: string[];
  categoryServie = inject(CategoryService);
  filtersQueryService = inject(FiltersQueryService);
  @ViewChild('filterForm') filterForm!: NgForm;
  route = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {}
  ngOnInit() {
    this.categories = this.categoryServie.getAll();
  }
  ngAfterViewInit() {
    this.filterForm.valueChanges?.subscribe({
      next: (values) => {
        let query = '';
        for (let key in values) {
          if (values[key]) query += `${key}=${values[key]}&`;
        }
        this.filtersQueryService.changeQuery(query);
      },
    });
  }
}
