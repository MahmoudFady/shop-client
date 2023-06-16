import { Component, inject } from '@angular/core';
import { FavouritesService } from './core/services/favourites.service';
import { LocalStorageService } from './core/services/local-stroage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-client';
  private favsService = inject(FavouritesService);
  private localStorageService = inject(LocalStorageService);

  ngOnInit() {
    this.favsService.getUserFavs();
    console.log(this.localStorageService.retrieveSecureData('userId'));
  }
}
