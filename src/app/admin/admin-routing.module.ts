import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReviewListComponent } from './vendor/review-list/review-list.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[

  //vendor
  {path: 'vendor/review',component: ReviewListComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
