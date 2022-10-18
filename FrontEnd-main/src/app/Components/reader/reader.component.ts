import { Component, OnInit } from '@angular/core';
import AddBooks from 'src/app/Entity/AddBooks';
import Readers from 'src/app/Entity/Readers';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderUserFromComponent implements OnInit {


  readers : Readers = new Readers();

  readersArray: Readers[]=[];
 
  addBooks:AddBooks= new AddBooks();
  addBooksArray:AddBooks[]=[];
  
  bid:number=0;
  
  
  
  
  createReader(readers:any,bid:number)
  {
    console.log(readers);
    const observable=this.readerService.BuyBookReader(this.readers,this.addBooks.bid);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        alert( " book is purchased your paymentId is "+ response);
        location.reload();
      },
      function(error)
      {
        console.log(error);
        alert("Book Id is invalid please enter a valid Book Id to purchase a book");
      }
  
    );
  }
  
  








  constructor(public readerService: ReaderService) {

    
   }
  
    ngOnInit(): void {
      
  
  }
  }

  
    
    