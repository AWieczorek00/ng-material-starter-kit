import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SortedProductsComponent } from './sorted-products.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [SortedProductsComponent],
  providers: [],
  exports: [SortedProductsComponent]
})
export class SortedProductsComponentModule {
}
