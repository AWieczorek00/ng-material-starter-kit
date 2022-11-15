import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }

  create(employee: EmployeeModel): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>(
      'https://dummy.restapiexample.com/api/v1/create',
      employee
    )
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://dummy.restapiexample.com/api/v1/employees').pipe(map((employees:any)=>employees.data.map((employee:any)=>{return{
      name:employee.employee_name,
      age:employee.employee_age,
      salary:employee.employee_salary
    }})));;
  }
}
