import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly product: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });

  constructor(private _productService: ProductService) {}

  onProductSubmitted(product: FormGroup): void {
    this._productService
      .create({
        title: product.get('title')?.value,
        price: product.get('price')?.value,
        category: product.get('category')?.value,
        description: product.get('description')?.value,
        image: product.get('image')?.value
      })
      .subscribe();
  }
}
