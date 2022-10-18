import { Component, OnInit } from '@angular/core';
import { AddBooksService } from 'src/app/add-books.service';
import { AuthorOnlyService } from 'src/app/author-only.service';
import AddBooks from 'src/app/Entity/AddBooks';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {




  book:AddBooks= new AddBooks();

booksArray:AddBooks[]=[];


aid:number=0;

bid:number=0;





updatebook(addBooks:any,j:number)
{
  this.bid=addBooks.bid;
  console.log(addBooks.bid);
  this.book.logo=addBooks.logo;
  this.book.title=addBooks.title;
  this.book.category=addBooks.category;
  this.book.price=addBooks.price;
  this.book.authorName=addBooks.authorName;
  this.book.publisherName=addBooks.publisherName;
  this.book.chapters=addBooks.chapters;
  this.book.active=addBooks.active;
  this.aid=addBooks.aid;

}

update(book:any)
{
  console.log(book);
  const observable=this.authorOnlyService.updateTest2(this.book,this.bid,this.aid);
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
  constructor(public authorOnlyService:AuthorOnlyService,public addBooksService:AddBooksService) {

   }

  ngOnInit(): void {

    const promise = this.addBooksService.getAllBooks();
      promise.subscribe((response) => {  
      console.log(response);
        this.booksArray = response as AddBooks[];
        
      });
  }

}
