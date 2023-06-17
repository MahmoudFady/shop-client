import { Component, effect, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuth = false;
  cartLength = 0;
  authService = inject(AuthService);
  favsService = inject(FavouritesService);
  favsLength = 0;
  constructor() {}
  ngOnInit() {
    this.isAuth = this.authService.isAuthSaved();
    this.authService.isAuthListener().subscribe({
      next: (isAuth) => {
        this.isAuth = isAuth;
      },
    });
    this.favsService.getFavsListener().subscribe({
      next: (result) => {
        this.favsLength = result.ids.length;
      },
    });
  }
  logout() {
    this.authService.logout();
  }
}
