import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.css'],
})
export class SignupComponent {
  errMsg!: string | null;
  authService = inject(AuthService);
  signup(form: NgForm) {
    console.log(form.value);
    if (form.invalid) return;
    this.authService.signup(form.value).subscribe({
      next: (res) => {
        const { token, userId } = res;
        this.authService.successAuth(token, userId);
      },
      error: (res) => {
        this.errMsg = res.error.message;
        setTimeout(() => {
          this.errMsg = null;
        }, 1000);
      },
    });
  }
}
