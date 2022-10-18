import { Component, OnInit } from '@angular/core';
import { AddBooksService } from 'src/app/add-books.service';
import AddBooks from 'src/app/Entity/AddBooks';
import BookList from 'src/app/Entity/BookList';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

 
  booklist: BookList = new BookList();

bookListArray: BookList[]=[];





getBookDetails() {
  this.addBookService.getAllBooks().subscribe(
    (response : any) => {
      console.log(response);
      this.bookListArray = response;
      console.log(response+"!!!!!!!!!!!!!!!!!!!");
    },
    
    function(error: any){
      console.log(error);
      alert("Something went wrong, Please try again!");
    }   
  );
}


  constructor(public addBookService: AddBooksService) {

    this.getBookDetails();
   }
  
    ngOnInit(): void {
      const promise = this.addBookService.getAllBooks();
      promise.subscribe((response) => {  
      console.log(response);
        this.bookListArray = response as BookList[];
      });
  
  }
  }