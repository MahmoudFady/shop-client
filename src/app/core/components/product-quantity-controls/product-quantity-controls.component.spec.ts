import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityControlsComponent } from './product-quantity-controls.component';

describe('ProductQuantityControlsComponent', () => {
  let component: ProductQuantityControlsComponent;
  let fixture: ComponentFixture<ProductQuantityControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQuantityControlsComponent]
    });
    fixture = TestBed.createComponent(ProductQuantityControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
