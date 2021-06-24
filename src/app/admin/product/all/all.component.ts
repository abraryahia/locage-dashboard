import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ProductAdminService } from '../../../Services/product-admin.service';

@Component({
  selector: 'ngx-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  products: Product[];
  constructor(private productAdminService: ProductAdminService) {}

  ngOnInit(): void {
    this.productAdminService.getAll().subscribe((result: any) => {            
      this.products = result.docs;
    });
  }
}
