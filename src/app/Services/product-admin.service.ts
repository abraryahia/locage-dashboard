import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductAdminService {
  private uri: String = "https://locage.herokuapp.com/api/v1/admin/products/";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.uri}`);
  }

  getTopDeals() {
    return this.http.get(`${this.uri}top-deals`);
  }

  getTodayDeals() {
    return this.http.get(`${this.uri}today-deals`);
  }
}
