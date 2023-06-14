import { Component, inject } from '@angular/core';
import { FavouritesService } from './core/services/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-client';
  favsService = inject(FavouritesService);
  ngOnInit() {
    this.favsService.getUserFavs();
  }
}
