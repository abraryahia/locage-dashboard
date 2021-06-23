import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbMenuModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReviewListComponent } from './vendor/review-list/review-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AdminComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class AdminModule { }
