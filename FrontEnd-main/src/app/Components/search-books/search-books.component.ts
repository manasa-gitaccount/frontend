import { Component, OnInit } from '@angular/core';
import AddBooks from 'src/app/Entity/AddBooks';
import BookList from 'src/app/Entity/BookList';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  addBooks : BookList = new BookList();

  booksArray: BookList[]=[];
   
  searchBooksReader(publisherName:string,category:string,price:number,authorName:string) {
  
      const promise = this.readerService.getSearchBooks(publisherName,category,price,authorName);
     promise.subscribe(
        (response: any) => {
          this.booksArray.splice(0);
          console.log(response);
         this.booksArray=response as BookList[];
        },
        function(error: any){
          console.log(error);
          alert("Something went wrong, Please try again!");
        }   
     )
     
    }
  
  
  
  
    
  constructor(public readerService: ReaderService) {
  
    
   }
  
    ngOnInit(): void {
      
  
  }
  }