import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
interface IUserRes {
  token: string;
  userId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userEndPoint = environment.baseUrl + 'users/';
  private readonly isAuth$ = new BehaviorSubject(false);
  private http = inject(HttpClient);
  private router = inject(Router);
  signup(user: any) {
    return this.http.post<IUserRes>(this.userEndPoint, user);
  }
  signin(data: { email: string; password: string }) {
    return this.http.post<IUserRes>(this.userEndPoint + 'signin', data);
  }
  successAuth(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    this.isAuth$.next(true);
  }
  logout() {
    localStorage.clear();
    this.isAuth$.next(false);
    this.router.navigateByUrl('/auth/signin');
  }
  isAuthSaved() {
    return localStorage.getItem('token') && localStorage.getItem('userId')
      ? true
      : false;
  }
  isAuthListener() {
    return this.isAuth$.asObservable();
  }
}
