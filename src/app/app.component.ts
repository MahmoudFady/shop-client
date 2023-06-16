import { Component, inject } from '@angular/core';
import { FavouritesService } from './core/services/favourites.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-client';
  private favsService = inject(FavouritesService);
  private authService = inject(AuthService);
  ngOnInit() {
    if (this.authService.isAuthSaved()) this.favsService.getUserFavs();
  }
}
