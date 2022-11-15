import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-advanced',
  styleUrls: ['./employee-advanced.component.scss'],
  templateUrl: './employee-advanced.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeAdvancedComponent {
  public order: Observable<string[]> = of(['asc', 'desc'])
  private _ordersSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public orders$: Observable<string> = this._ordersSubject.asObservable();
  private _ageSubject: Subject<number> = new Subject<number>();
  public age$: Observable<number> = this._ageSubject.asObservable();
  private _ageSecondSubject: Subject<number> = new Subject<number>();
  public ageSecond$: Observable<number> = this._ageSecondSubject.asObservable();

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.orders$,
    this.age$,
    this.ageSecond$,
  ]).pipe(
    map(([employee, order, age,ageSecond]: [EmployeeModel[], string, number,number]) => {
      if(age===ageSecond){
        return employee.sort((a, b) => {
          if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
          if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
      }
      return employee.filter(employee => employee.age >= age && employee.age<ageSecond,

        employee.sort((a, b) => {
          if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
          if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
      )

    }),
  )


  constructor(private _employeeService: EmployeeService) {
  }


  sort(order: string) {
    this._ordersSubject.next(order);
  }

  filter(a:number,b:number) {
    this._ageSubject.next(a)
    this._ageSecondSubject.next(b)
  }
}
