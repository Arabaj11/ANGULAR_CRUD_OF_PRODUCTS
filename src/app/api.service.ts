import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  baseurl:any = "https://659eacdf47ae28b0bd367360.mockapi.io/products";

  get(){
     return this.http.get(this.baseurl);
  }

  getbyid(id:number){
    return this.http.get(this.baseurl+"/"+ id);
  }

  post(body:any){
   return this.http.post(this.baseurl,body)
  }

  put(id:number,body:any){
    return this.http.put(this.baseurl+ "/" + id ,body)
  }

  delete(id:number){
     return this.http.delete(this.baseurl+ "/" + id)
  }
}
