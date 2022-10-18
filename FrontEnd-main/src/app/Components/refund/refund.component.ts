import { Component, OnInit } from '@angular/core';
import Readers from 'src/app/Entity/Readers';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {
  readers : Readers = new Readers();

  readersArray: Readers[]=[];

  email:string='';
 
  bid:number=0; 
 
 
   
  
   
  getrefundEmailAndPayment(email:string,bid:number) {
  
      const promise = this.readerService.getrefundStatus(email,bid);
     promise.subscribe(
         (response: any) => {
           //this.readersArray.splice(0);
          console.log(response);
          //this.readersArray=response as Readers[];
         alert(response);
         },
         function(error: any){
           console.log(error);
           alert("Sorry your request cannot be processed...!");
         }   
      )
    
     
    }
  
  
  
  
    
  constructor(public readerService: ReaderService) {
  
    
   }
  
    ngOnInit(): void {
      
  
  }
  }
