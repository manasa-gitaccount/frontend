import { Component, OnInit } from '@angular/core';
import { AddBooksService } from 'src/app/add-books.service';
import AddBooks from 'src/app/Entity/AddBooks';
import Readers from 'src/app/Entity/Readers';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-find-purchased-books',
  templateUrl: './find-purchased-books.component.html',
  styleUrls: ['./find-purchased-books.component.css']
})
export class FindPurchasedBooksComponent implements OnInit {


  
  readers : Readers = new Readers();

  readersArray: Readers[]=[];

  email:string='';
 
  
  booksArray:AddBooks[]=[];
 
   
  
    getBookDetailsByEmail(email:string) {
  
      const promise = this.readerService.getBooksforReader(email);
      
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