import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly api ='https://locage.herokuapp.com/api/v1/products';
constructor(private http:HttpClient) { }


}
