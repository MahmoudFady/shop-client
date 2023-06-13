import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
@Injectable({ providedIn: 'root' })
export class AuthServie {
  private readonly userEndPoint = environment.baseUrl + 'users/';
  private readonly isAuth = signal(false);
  private http = inject(HttpClient);
  private router = inject(Router);
  signin(data: { email: string; password: string }) {
    return this.http.post<{
      token: string;
      userId: string;
    }>(this.userEndPoint + 'signin', data);
  }
  successAuth(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    this.isAuth.set(true);
  }
  logout() {
    localStorage.clear();
    this.isAuth.set(false);
    this.router.navigateByUrl('/auth/signin');
  }
}
