import { Component, OnInit } from '@angular/core';
import { AddBooksService } from 'src/app/add-books.service';
import { AuthorOnlyService } from 'src/app/author-only.service';
import AddBooks from 'src/app/Entity/AddBooks';
import Author from 'src/app/Entity/Author';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

addBooks:AddBooks= new AddBooks();
addBooksArray:AddBooks[]=[];

author:Author= new Author();
authors:Author[]=[];
aid:number=0;




createBooks(addBooks:any,aId:number)
{
  console.log(addBooks);
  const observable=this.addBookService.createBooks(this.addBooks,this.author.aid);
  observable.subscribe(
    (response:any)=>{
      console.log(response);
    alert("books added your book id is"+response);
      location.reload();
    },
    function(error)
    {
      console.log(error);
      alert("Author Id is invalid please enter a valid Id to create / Add a book");
    }

  );
}


  constructor(public addBookService:AddBooksService , public authorService:AuthorOnlyService) { }

  ngOnInit(): void {


    const promise= this.authorService.getAuthors();
    promise.subscribe((response)=>
    {
      console.log(response);
      this.authors=response as Author[];
    })
  
    const obj = this.addBookService.getAllBooks();
    obj.subscribe((response) =>
  {
    console.log(response);
    this.authors=response as Author[];
  });

  }

  

}
