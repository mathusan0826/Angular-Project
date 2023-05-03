import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  postOrder(Neworder: any) {
    let url = "http://localhost:5000/orders";
    return this.http.post(url, Neworder, this.httpOptions);
  }
  
}
