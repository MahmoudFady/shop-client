import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FilterFormComponent } from './core/components/filter-form/filter-form.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';
import { ProductItemComponent } from './core/components/product-item/product-item.component';
import { ProductDetailsComponent } from './core/components/product-details/product-details.component';
import { SearchComponent } from './core/components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    ShopComponent,
    FilterFormComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SearchComponent,
    ProductSingleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
