import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { ProductService } from "../../../Services/Product.service";

@Component({
  selector: "app-EditProduct",
  templateUrl: "./EditProduct.component.html",
  styleUrls: ["./EditProduct.component.scss"],
})
export class EditProductComponent implements OnInit {
  settings = {
    noDataMessage: "Sorry no data to show!!",
    actions: {
      add: false,
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      title: {
        title: "product Name",
        type: "string",
      },
      price: {
        title: "Price",
        type: "number",
      },
      quantity: {
        title: "quantity",
        type: "number",
      },
      size: {
        title: "Size",
        type: "string",
      },
      Weight: {
        title: "Weight",
        type: "string",
      },
      brand: {
        title: "brand",
        type: "string",
      },
      discount: {
        title: "discount",
        type: "number",
      },
      discountDate: {
        title: "DiscountDate",
        valuePrepareFunction: (discount: { start: any; end: any }) => {
          if (!this.isValidDate(new Date(discount.start))) {
            console.log(this.isValidDate(new Date(discount.start)));

            return "No Discount";
          } else {
            console.log(discount);

            let start = new Date(discount.start);
            let end = new Date(discount.end);
            return `from ${start.toLocaleDateString()} to ${end.toLocaleDateString()}`;
          }
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private product_service: ProductService, private route: Router) {}

  ngOnInit() {
    this.product_service.getProducts(1);
    this.source.load(this.product_service.products);
    this.product_service.getProductsWithoutLoad().subscribe((products) => {
      console.log("hhh", products);

      this.source.load(products);
    });
  }
  
  onEdit(event) {
    //editForm
    this.route.navigateByUrl("/vendor/product/editForm/" + event.data._id);
  }

  onDelete(event) {
    this.product_service.deletProduct(event.data._id);
  }

  isValidDate(d: any) {
    return d instanceof Date && !isNaN(+d);
  }
}
