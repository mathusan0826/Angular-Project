import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private baseUrl = 'http://localhost:5000/api/addPerson';
  //baseUrl: any;
  constructor(private http: HttpClient) { }

  // httpOptions={
  //   Headers:new HttpHeaders({
  //     "Content-type":'application/json'
  //   })
  // };
  postperson(data:any):Observable<any> {
    return this.http.post(this.baseUrl,data);
  

 }

  getperson(){
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

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteperson(id: any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
