import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Readers from './Entity/Readers';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  

  BuyBookReader(Readers:Object,bId:number):Observable<Object>
{
  return this.http.post("http://localhost:8081/api/v1/digitalbooks/books/"+bId+"/buy",Readers);
}

getBooksforReader(email:string)
{
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/readers/"+email+"/books")
}


getConentOfDisplay(email:string,bid:number)
{
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/readers/"+email+"/books/"+bid)
}


getBooksByPId(email:string,payId:number)
{
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/readers/"+email+"/book/"+payId);
}

getrefundStatus(email:string,bid:number)
{
  
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/readers/"+email+"/books/"+bid+"/refund",{responseType: 'text'});
}

getSearchBooks(publisherName:string,category:string,price:number,authorName:string)
{
  
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/books/search?publisherName="+publisherName+"&category="+category+"&price="+price+"&authorName="+authorName);
}


  constructor( public http :HttpClient) { }
}
