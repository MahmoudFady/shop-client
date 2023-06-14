import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  loading = false;
  errMsg!: string | null;
  authService = inject(AuthService);
  constructor() {}
  ngOnInit() {}
  signin(f: NgForm) {
    if (f.invalid) return;
    this.loading = true;
    this.authService.signin(f.value).subscribe({
      next: (res) => {
        this.loading = false;
        const { token, userId } = res;
        this.authService.successAuth(token, userId);
      },
      error: (res) => {
        this.errMsg = res.error.message;
        this.loading = false;
        setTimeout(() => {
          this.errMsg = null;
        }, 1000);
      },
    });
  }
}
