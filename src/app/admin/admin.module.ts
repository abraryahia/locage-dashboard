import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReviewListComponent } from './vendor/review-list/review-list.component';
import { AllStoresComponent } from './vendor/all-stores/all-stores.component';
import { TopDealsComponent } from './product/top-deals/top-deals.component';
import { TodayDealsComponent } from './product/today-deals/today-deals.component';
import { AllComponent } from './product/all/all.component';
import { AllCategoriesComponent } from './category/all/all.component';
import { ProductsCountComponent } from './category/products-count/products-count.component';
import { AddComponent } from './category/add/add.component';
import { SubcategoryComponent } from './category/subcategory/subcategory.component';


@NgModule({
  declarations: [
    AdminComponent,
    ReviewListComponent,
    AllStoresComponent,
    TopDealsComponent,
    TodayDealsComponent,
    AllComponent,
    AllCategoriesComponent,
    ProductsCountComponent,
    AddComponent,
    SubcategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
  ]
})
export class AdminModule { }
