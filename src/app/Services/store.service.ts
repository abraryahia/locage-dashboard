import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  private uri: String = "https://locage.herokuapp.com/api/v1/admin/stores/";

  constructor(private http: HttpClient) {}

  getOnHoldStores() {
    return this.http.get(`${this.uri}hold`);
  }
}
