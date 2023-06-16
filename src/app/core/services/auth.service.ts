import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LocalStorageService } from './local-stroage.service';
import { FavouritesService } from './favourites.service';
interface IUserRes {
  token: string;
  userId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userEndPoint = environment.baseUrl + 'users/';
  private readonly isAuth$ = new Subject<boolean>();
  private localStorageService = inject(LocalStorageService);
  private favsService = inject(FavouritesService);
  private http = inject(HttpClient);
  private router = inject(Router);
  signup(user: any) {
    return this.http.post<IUserRes>(this.userEndPoint, user);
  }
  signin(data: { email: string; password: string }) {
    return this.http.post<IUserRes>(this.userEndPoint + 'signin', data);
  }
  successAuth(token: string, userId: string) {
    this.localStorageService.storeSecureData('token', token);
    this.localStorageService.storeSecureData('userId', userId);
    this.favsService.getUserFavs();
    this.isAuth$.next(true);
  }
  logout() {
    localStorage.clear();
    this.isAuth$.next(false);
    this.router.navigateByUrl('/auth/signin');
  }
  isAuthSaved() {
    return this.getToken() && this.getUserId() ? true : false;
  }
  getToken() {
    return this.localStorageService.retrieveSecureData('token');
  }
  getUserId() {
    return this.localStorageService.retrieveSecureData('userId');
  }
  isAuthListener() {
    return this.isAuth$.asObservable();
  }
}
