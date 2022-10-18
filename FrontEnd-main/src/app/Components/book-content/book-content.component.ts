import { Component, OnInit } from '@angular/core';
import AddBooks from 'src/app/Entity/AddBooks';
import Readers from 'src/app/Entity/Readers';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {

  
  title = "Please provide email and bookId to read the book"
  readers : Readers = new Readers();

  readersArray: Readers[]=[];

  email:string='';
 
  bid:number=0; 
  booksArray:AddBooks[]=[];
 
   
  
    getBookContentByEmail(email:string,bid:number) {
  
      const promise = this.readerService.getConentOfDisplay(email,bid);
     promise.subscribe(
        (response: any) => {
          this.readersArray.splice(0);
          console.log(response);
         this.booksArray=response as AddBooks[];
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