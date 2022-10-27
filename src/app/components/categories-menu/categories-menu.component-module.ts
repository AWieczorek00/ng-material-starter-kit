import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesMenuComponent } from './categories-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule,BrowserModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
