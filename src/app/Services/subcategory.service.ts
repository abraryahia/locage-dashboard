import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private readonly subcategoryAPI = "https://locage.herokuapp.com/api/v1/admin/subcategory";

  constructor(private http: HttpClient) { }

  getSubcategories() {
    return this.http.get(this.subcategoryAPI);
  }

}
