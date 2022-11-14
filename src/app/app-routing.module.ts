import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginComponent } from './components/login/login.component';
import { ExtendProductComponent } from './components/extend-product/extend-product.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { CreateEmployeeComponentModule } from './components/create-employee/create-employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { ExtendProductComponentModule } from './components/extend-product/extend-product.component-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { ProductsComponentModule } from './components/products/products.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-list', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'crypto', component: CryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'extend-product', component: ExtendProductComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'products/:category', component: ProductsComponent }
    ]),
    ProductListComponentModule,
    ProductServiceModule,
    CategoriesComponentModule,
    CategoryServiceModule,
    CheckboxCategoriesComponentModule,
    CryptoComponentModule,
    CryptoServiceModule,
    PublicHolidaysComponentModule,
    ProductFormComponentModule,
    CreateEmployeeComponentModule,
    EmployeeServiceModule,
    LoginComponentModule,
    LoginServiceModule,
    ExtendProductComponentModule,
    RegisterComponentModule,
    ProductsComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
