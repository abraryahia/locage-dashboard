import { Component, OnInit } from '@angular/core';
import { StoreModel } from '../../../Models/Store';
import { StoreService } from '../../../Services/store.service';

@Component({
  selector: 'ngx-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.scss']
})
export class AllStoresComponent implements OnInit {
  stores: StoreModel[];
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllStores().subscribe((result:any)=>{
      this.stores = result.stores;
    })
  }

}
