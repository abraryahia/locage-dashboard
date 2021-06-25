import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../Services/Category.service';

@Component({
  selector: 'ngx-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categories: any[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getcategoriesWithSubcategories().subscribe((result: any) => {
      this.categories = result.result;
    });

  }

}
