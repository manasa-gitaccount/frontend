import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Author from './Entity/Author';
import AddBooks from './Entity/AddBooks';

const BASE_URL = "http://localhost:8081/api/v1/digitalbooks/author"

const getAllAuthorUrl = "http://localhost:8081/api/v1/digitalbooks/getAll"



@Injectable({
  providedIn: 'root'
})
export class AuthorOnlyService {

 getAuthors(){
   return this.http.get(getAllAuthorUrl);
 }

createAuthor(Author :{authorName:string}){
return this.http.post(BASE_URL,Author)
}

editBooks(aId:number)
{
  return  this.http.get("http://localhost:8081/api/v1/digitalbooks/allBooks/"+aId)
}

updateBooks(addbooks:any,bid:number)
{

  return this.http.put("http://localhost:8081/api/v1/digitalbooks/book/"+bid,addbooks)
}


updateTest2(addBooks:any,aid:number,bid:number)
{
  return this.http.put("http://localhost:8081/api/v1/digitalbooks/author/"+aid+"/book/"+bid,addBooks)
}


  constructor(public http :HttpClient) { }
}



