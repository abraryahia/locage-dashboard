import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../../Models/Category';
import { CategoryService } from '../../../Services/Category.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  categories: Category[];
  formData:FormData=new FormData(); 

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((result: any) => {
      this.categories = result.result;
    });
  }

  onfileselected(event: any){
    const selectedfile = event.target.files[0];
    this.formData.append('photo', selectedfile, selectedfile.name);
  }

  onAddCategory(categoryForm: NgForm, categorySpinner: any, additionConfirmation: any) {
    additionConfirmation.style.display = 'none';
    categorySpinner.style.display = 'block';
    this.formData.append('name', categoryForm.value.name.toString());
    console.log(this.formData);
    console.log(categoryForm);
    this.categoryService.addCategory(this.formData).subscribe((result: any) => {
      categorySpinner.style.display = 'none';
      additionConfirmation.style.display = 'block';
      categoryForm.reset();
      this.ngOnInit();
    });
  }

}
