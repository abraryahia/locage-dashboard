import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../Models/Category";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  Categories: Category[] = [];
  private categoryLoad = new Subject<Category[]>();
  private readonly apiCategory = "https://locage.herokuapp.com/api/v1/category";

  getCategoryWithoutLoad() {
    return this.categoryLoad.asObservable();
  }
  getAllCategory() {
    this.http.get(this.apiCategory).subscribe((c: any) => {
      this.Categories = c?.result;
      this.categoryLoad.next([...this.Categories]);
    });
  }

  getSubCategoryOfMaincategory(categorId) {
    return this.http.get(this.apiCategory + "/" + categorId);
  }
}
