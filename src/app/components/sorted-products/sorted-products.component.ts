import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sorted-products',
  styleUrls: ['./sorted-products.component.scss'],
  templateUrl: './sorted-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortedProductsComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly categories$: Observable<string[]> = this._categoryService.getAll();
  readonly products$: Observable<ProductModel[]> =
    combineLatest([
      this._productService.getAll(),
      this.order$
    ]).pipe(
      map(([products,order]:[ProductModel[],string])=>{
        return products.sort((a,b)=>{
          if(a.price >b.price) return order==='asc'? 1:-1;
          if(a.price <b.price) return order==='asc'? -1:1;
          return 0;
        })
      })
    )
  public orders:Observable<string[]> = of(['asc','desc'])

  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService
  ) {}

  sort(order:string):void{
    this._orderSubject.next(order)
  }
}
