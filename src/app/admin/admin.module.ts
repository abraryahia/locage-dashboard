import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbMenuModule ,
         NbCardModule ,
         NbDialogModule ,
         NbSelectModule,} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReviewListComponent } from './vendor/review-list/review-list.component';
import { AllStoresComponent } from './vendor/all-stores/all-stores.component';
import { TopDealsComponent } from './product/top-deals/top-deals.component';
import { TodayDealsComponent } from './product/today-deals/today-deals.component';
import { AllComponent } from './product/all/all.component';
import { AllOrderComponent } from "./order/all-order/all-order.component";
import { StatusComponent } from './order/status/status.component';
import { AllDiscountComponent } from './discount/all-discount/all-discount.component';
import { AddDiscountComponent } from './discount/add-discount/add-discount.component';
import { EditDiscountComponent } from './discount/edit-discount/edit-discount.component';
import { VendorReviewComponent } from './review/vendor-review/vendor-review.component';
import { ProductReviewComponent } from './review/product-review/product-review.component';



@NgModule({
  declarations: [
    AdminComponent,
    ReviewListComponent,
    AllStoresComponent,
    TopDealsComponent,
    TodayDealsComponent,
    AllComponent,
    AllOrderComponent,
    StatusComponent,
    AllDiscountComponent,
    AddDiscountComponent,
    EditDiscountComponent,
    VendorReviewComponent,
    ProductReviewComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbDialogModule,  
    NbSelectModule
  ]
})
export class AdminModule { }
