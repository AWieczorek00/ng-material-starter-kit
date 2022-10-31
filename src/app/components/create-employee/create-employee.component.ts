import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  styleUrls: ['./create-employee.component.scss'],
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly employee: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
  });

  constructor(private _employeeService: EmployeeService) {}

  onEmployeeSubmitted(employee: FormGroup): void {
    this._employeeService
      .create({
        name: employee.get('name')?.value,
        salary: employee.get('salary')?.value,
        age: employee.get('age')?.value,
      })
      .subscribe();
  }
}
