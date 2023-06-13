import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FiltersQueryService {
  private readonly query = new Subject<string>();
  changeQuery(query: string) {
    this.query.next(query);
  }
  getUpdatedQuery() {
    return this.query.asObservable();
  }
}
