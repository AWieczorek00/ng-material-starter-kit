import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  constructor(private _categoryService: CategoryService) {
  }
  readonly categories$: Observable<string[]> = this._categoryService.getAll();

}
