import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Vendor } from "../Models/Vendor";

@Injectable({
  providedIn: "root",
})
export class VendorService {
  vendor: Vendor;
  private readonly api = "https://locage.herokuapp.com/api/v1/stores/check";
  private readonly url = "https://locage.herokuapp.com/api/v1/stores";
  private vendorLoad = new Subject<Vendor>();

  constructor(private http: HttpClient) {}

  getVendor(id) {
    this.http
      .get<{ vendor: Vendor }>(this.api + "/" + id)
      .subscribe((vendor: any) => {
        this.vendorLoad.next(vendor);
      });
  }

  getVendorWithoutLoad() {
    return this.vendorLoad.asObservable();
  }

  editVendor(id, _vendor: FormData) {
    this.http.patch(this.url + "/" + id, _vendor).subscribe((d: any) => {
      this.vendorLoad.next(d?.result);
    });
  }
}
