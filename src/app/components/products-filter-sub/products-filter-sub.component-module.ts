import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductsFilterSubComponent } from './products-filter-sub.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductsFilterSubComponent],
  providers: [],
  exports: [ProductsFilterSubComponent]
})
export class ProductsFilterSubComponentModule {
}
