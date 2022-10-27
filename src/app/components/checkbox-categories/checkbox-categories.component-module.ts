import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxCategoriesComponent } from './checkbox-categories.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CheckboxCategoriesComponent],
  providers: [],
  exports: [CheckboxCategoriesComponent]
})
export class CheckboxCategoriesComponentModule {
}
