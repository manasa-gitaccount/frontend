import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestHeader=new HttpHeaders(
    { "No-Auth":"True"}
  );

  constructor(private httpclient:HttpClient) { }

  public login(loginData:any){
    return this.httpclient.post("http://localhost:8083/api/v1/author/authenticate",loginData,{ headers: this.requestHeader});
  }
}
