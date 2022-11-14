import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products.component';
import { FlexModule } from "@angular/flex-layout";
import { RouterLink } from "@angular/router";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    FlexModule,
    RouterLink
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}
