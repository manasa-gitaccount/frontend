import { Component, OnInit } from '@angular/core';
import { AddBooksService } from 'src/app/add-books.service';
import { AuthorOnlyService } from 'src/app/author-only.service';
import AddBooks from 'src/app/Entity/AddBooks';
import Author from 'src/app/Entity/Author';
import BookList from 'src/app/Entity/BookList';
import UpdateBooks from 'src/app/Entity/UpdateBooks';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

 
  author: Author = new Author();

authorArray: Author[]=[];

book:UpdateBooks= new UpdateBooks();

booksArray:UpdateBooks[]=[];

booksArray2:BookList[]=[];

aId:number=0;

bid:number=0;

getAuthorDetails() {
  this.authorOnlyService.getAuthors().subscribe(
    (response : any) => {
      console.log(response);
      this.authorArray = response;
      console.log(response+"!!!!!!!!!!!!!!!!!!!");
    },
    
    function(error: any){
      console.log(error);
      alert("Something went wrong, Please try again!");
    }   
  );
}


getBookDetailsByAuthor(aid:number) {
  
  const promise = this.authorOnlyService.editBooks(aid);
  
 promise.subscribe(
    (response: any) => {
      this.authorArray.splice(0);
      console.log(response);
     this.booksArray=response as UpdateBooks[];
      
    },
    function(error: any){
      console.log(error);
      
      alert("Something went wrong, Please try again!");
    }   
 )

 
}

updatebook(addBooks:any,j:number)
{
  this.bid=addBooks.bid;
  console.log(addBooks.bid);
  this.book.logo=addBooks.logo;
  console.log(addBooks.logo);
  this.book.title=addBooks.title;
  console.log(addBooks.title);
  this.book.category=addBooks.category;
  console.log(addBooks.category);
  this.book.price=addBooks.price;
  console.log(addBooks.price);
  // this.book.authorName=addBooks.authorName;
  // console.log(addBooks.authorName);
  this.book.publisherName=addBooks.publisherName;
  console.log(addBooks.publisherName);
  this.book.chapters=addBooks.chapters;
  console.log(addBooks.chapters);
  this.book.active=addBooks.active;
  console.log(addBooks.active);

}

update(book:any)
{
  console.log(book);
  const observable=this.authorOnlyService.updateBooks(this.book,this.book.bid);
  observable.subscribe(
    (response:any) => {

      console.log(response);
      alert("book updated");
    },
function(error){
  console.log(error);
  alert("something wrong");
});

  window.location.reload();
}




  constructor(public authorOnlyService: AuthorOnlyService,public addBooksService:AddBooksService) {

    this.getAuthorDetails();
    this.getBookDetailsByAuthor(this.aId);
    this.getBookDetails();
   }

   getBookDetails() {
    this.addBooksService.getAllBooks().subscribe(
      (response : any) => {
        console.log(response);
        this.booksArray = response;
        console.log(response+"!!!!!!!!!!!!!!!!!!!");
      },
      
      function(error: any){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
    );
  }
  
  
    ngOnInit(): void {
      const promise = this.authorOnlyService.getAuthors();
      promise.subscribe((response) => {  
      console.log(response);
        this.authorArray = response as Author[];
        
      });
    {
      const promise = this.addBooksService.getAllBooks();
      promise.subscribe((response) => {  
      console.log(response);
        this.booksArray = response as UpdateBooks[];
        
      });

    }

      }
  




  }


  
  

 
 
  
  
 
   
  
  
  
  
  
    
 
  
  
  
