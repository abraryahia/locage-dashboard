import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AllCategoriesComponent } from "./category/all/all.component";
import { ProductsCountComponent } from "./category/products-count/products-count.component";
import { AllComponent } from "./product/all/all.component";
import { TodayDealsComponent } from "./product/today-deals/today-deals.component";
import { TopDealsComponent } from "./product/top-deals/top-deals.component";
import { AllStoresComponent } from "./vendor/all-stores/all-stores.component";
import { ReviewListComponent } from "./vendor/review-list/review-list.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      //vendor
      { path: "vendor/review", component: ReviewListComponent },
      { path: "vendor/stores", component: AllStoresComponent },

      //product
      { path: "product/all", component: AllComponent },
      { path: "product/top-deal", component: TopDealsComponent },
      { path: "product/today-deal", component: TodayDealsComponent },

      //category
      { path: "category/all", component: AllCategoriesComponent },
      { path: "category/product-count", component: ProductsCountComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
