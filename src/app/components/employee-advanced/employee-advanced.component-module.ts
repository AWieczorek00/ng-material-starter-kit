import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EmployeeAdvancedComponent } from './employee-advanced.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [EmployeeAdvancedComponent],
  providers: [],
  exports: [EmployeeAdvancedComponent]
})
export class EmployeeAdvancedComponentModule {
}
