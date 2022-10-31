import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-extend-product',
  styleUrls: ['./extend-product.component.scss'],
  templateUrl: './extend-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendProductComponent {
  readonly category$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService,private _productService: ProductService) {
  }

  readonly product: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });
  selected: string='';

  onProductSubmitted(product: FormGroup): void {
    this._productService
      .create({
        title: product.get('title')?.value,
        price: product.get('price')?.value,
        category: this.selected,
        description: product.get('description')?.value,
        image: product.get('image')?.value
      })
      .subscribe();
  }


}
