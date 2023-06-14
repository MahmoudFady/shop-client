import { Component, effect, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuth = false;
  authService = inject(AuthService);
  constructor() {}
  ngOnInit() {
    this.isAuth = this.authService.isAuthSaved();
    this.authService.isAuthListener().subscribe({
      next: (isAuth) => {
        this.isAuth = isAuth;
      },
    });
  }
  logout() {
    this.authService.logout();
  }
}
