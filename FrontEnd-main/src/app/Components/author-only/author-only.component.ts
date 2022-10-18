import { Component, OnInit } from '@angular/core';
import { AuthorOnlyService } from 'src/app/author-only.service';
import Author from 'src/app/Entity/Author';

@Component({
  selector: 'app-author-only',
  templateUrl: './author-only.component.html',
  styleUrls: ['./author-only.component.css']
})
export class AuthorOnlyComponent implements OnInit {

title = "Please fill the details below to add the author"

author: Author = new Author();

authorArray: Author[]=[];
 

  save() {

    const observable = this.authorOnlyService.createAuthor(this.author)
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert("author added your id is "+response) ;
        
        location.reload();
        
      },
      function(error: any){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
   )
   
  }




  
constructor(public authorOnlyService: AuthorOnlyService) {

  this.authorOnlyService.getAuthors;
 }

  ngOnInit(): void {
    const promise = this.authorOnlyService.getAuthors();
    promise.subscribe((response) => {  
    console.log(response);
      this.authorArray = response as Author[];
    });

}
}