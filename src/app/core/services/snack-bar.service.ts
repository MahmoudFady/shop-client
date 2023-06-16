import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBar = inject(MatSnackBar);
  display(msg: string, className = 'successSnack', action = 'ok') {
    this.snackBar.open(msg, action, {
      panelClass: [className],
    });
  }
}
