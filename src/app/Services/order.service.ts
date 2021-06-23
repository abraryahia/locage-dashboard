import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly api ='https://locage.herokuapp.com/api/v1/products';
constructor(private http:HttpClient) { }

getOrdersVendor(){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM5MjM5MTksImV4cCI6MTYyNDAxMDMxOX0.DewOuZxEgMPlXosBQzMT8wlzhd44gdjNo1dfsc6xL7o"
  })
}
}
