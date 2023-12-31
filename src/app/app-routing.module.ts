import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop/:id',
    component: ProductSingleComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: 'favs',
        component: FavouritesComponent,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
