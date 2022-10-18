import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AddBooks from './Entity/AddBooks';
import Author from './Entity/Author';


//const BASE_URL = "http://localhost:8081/api/v1/digitalbooks/author"

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {
 

createBooks(AddBooks:Object,aId:number):Observable<Object>
{
  return this.http.post("http://localhost:8081/api/v1/digitalbooks/author/"+aId+"/book",AddBooks);
}


getBookById(aid:number)
{
  return this.http.get
}

getAllBooks()
{
  return this.http.get("http://localhost:8081/api/v1/digitalbooks/books/getAllBooks");
}

  constructor( public http:HttpClient) { }
}
