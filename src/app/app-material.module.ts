import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatBadgeModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatExpansionModule,
  ],
  exports: [
    MatBadgeModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatExpansionModule,
  ],
})
export class AppMaterialModule {}
