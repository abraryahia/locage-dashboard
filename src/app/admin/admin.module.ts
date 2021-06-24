import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReviewListComponent } from './vendor/review-list/review-list.component';
import { AllStoresComponent } from './vendor/all-stores/all-stores.component';
import { TopDealsComponent } from './product/top-deals/top-deals.component';
import { TodayDealsComponent } from './product/today-deals/today-deals.component';
import { AllComponent } from './product/all/all.component';


@NgModule({
  declarations: [
    AdminComponent,
    ReviewListComponent,
    AllStoresComponent,
    TopDealsComponent,
    TodayDealsComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
  ]
})
export class AdminModule { }
