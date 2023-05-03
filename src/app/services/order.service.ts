import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:5000/api/order';
  //baseUrl: any;
  constructor(private http: HttpClient) { }

  // httpOptions={
  //   Headers:new HttpHeaders({
  //     "Content-type":'application/json'
  //   })
  // };
  postOrder(data:any):Observable<any> {
    return this.http.post(this.baseUrl,data);
  

 }

  getOrder(){
    return this.http.get(`${this.baseUrl}`);
  }

  // getOrder():Observable<Order>{
  //   return this.http.get(`${this.baseUrl}`);
  // }

  // get(id: any): Observable<Order> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
 

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  updateOrder(id: any,order: any) {
    return this.http.put(`${this.baseUrl}/${id}`,order);
    
  }

  // deleteOrder(id: any): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${+id}`);
  //   console.log();
  //   // this.order =Order.filter((u:any)=>u!==Order)
    
  // }
  // delOrder(datas:any){
  //   this.service.deleteOrder(datas._id).subscribe(data =>{
  //     console.log(data);
  //     this. delOrder= this.addorder.filter((u:any)=>u!==datas)
  //   })
  deleteOrder(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  // deleteOrder(id: any) {
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
