import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServie } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  loading = false;
  errMsg!: string | null;
  authServie = inject(AuthServie);
  constructor() {}
  ngOnInit() {}
  signin(f: NgForm) {
    if (f.invalid) return;
    this.loading = true;
    this.authServie.signin(f.value).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
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
