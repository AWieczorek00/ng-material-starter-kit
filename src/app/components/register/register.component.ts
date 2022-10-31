import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly register: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _registerService: RegisterService) {}

  onRegisterSubmitted(register: FormGroup): void {
    this._registerService
      .register({
        email: register.get('emial')?.value,
        username: register.get('username')?.value,
        password: register.get("password")?.value,
        name: {
          firstname:register.get("firstname")?.value,
          lastname:register.get("lastname")?.value,
        },
        address: {
          city:register.get("city")?.value,
          street:register.get("street")?.value,
          number:register.get('number')?.value,
          zipcode:register.get('zipcode')?.value
        },
        phone: register.get('phone')?.value,
      })
      .subscribe();
  }
}
