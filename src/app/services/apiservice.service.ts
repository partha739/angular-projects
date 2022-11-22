import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  loginUrl="http://localhost:3000/signup";
  apiUrl="http://localhost:3000/products";

  getAllData():Observable<any>{
    console.log("data");
    return this._http.get(this.apiUrl);
  }
  createData(data:any):Observable<any>{
    console.log(data)
    return this._http.post(this.apiUrl,data)
  }
  updateData(data:any,id:any):Observable<any>{
    return this._http.put(this.apiUrl+"/"+id,data);
  }
  getSingleData(id:any):Observable<any>{
    return this._http.get(this.apiUrl+"/"+id);
  }


  createUserData(data:any):Observable<any>{
    console.log(data)
    return this._http.post(this.loginUrl,data)
  }

  getEmailAPI(data:any): Observable < any > {
    return this._http.get("http://localhost:3000/checkemails",data)
  }


}
