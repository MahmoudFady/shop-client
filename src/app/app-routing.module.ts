import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './core/components/shop/shop.component';
import { SigninComponent } from './core/components/signin/signin.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProductDetailsComponent } from './core/components/product-details/product-details.component';
import { ProductSingleComponent } from './core/components/product-single/product-single.component';

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
