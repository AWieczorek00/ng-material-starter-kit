import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'crypto', component: CryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent }
    ]),
    ProductListComponentModule,
    ProductServiceModule,
    CategoriesComponentModule,
    CategoryServiceModule,
    CheckboxCategoriesComponentModule,
    CryptoComponentModule,
    CryptoServiceModule,
    PublicHolidaysComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
