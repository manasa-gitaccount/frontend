import { Component, OnInit } from '@angular/core';
import AddBooks from 'src/app/Entity/AddBooks';
import Readers from 'src/app/Entity/Readers';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-books-by-payment',
  templateUrl: './books-by-payment.component.html',
  styleUrls: ['./books-by-payment.component.css']
})
export class BooksByPaymentComponent implements OnInit {

  
  title ="please provide payment id and email id to find Books"
  readers : Readers = new Readers();

  readersArray: Readers[]=[];

  email:string='';
 
  payId:number=0; 
  booksArray:AddBooks[]=[];
 
   
  
   
  getBookByEmailAndPayment(email:string,payId:number) {
  
      const promise = this.readerService.getBooksByPId(email,payId);
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