import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { ProductModel } from "../../models/product.model";
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-products",
  styleUrls: ["./products.component.scss"],
  templateUrl: "./products.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRouter.params
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
    return products.filter((product:ProductModel)=>product.category===params['category'] );
  }));

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _activatedRouter: ActivatedRoute
  ) {
  }
}
