import { Component, OnInit } from '@angular/core';
import { AuthorOnlyService } from 'src/app/author-only.service';
import Author from 'src/app/Entity/Author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {


  author: Author = new Author();

authorArray: Author[]=[];





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


  constructor(public authorOnlyService: AuthorOnlyService) {

    this.getAuthorDetails();
   }
  
    ngOnInit(): void {
      const promise = this.authorOnlyService.getAuthors();
      promise.subscribe((response) => {  
      console.log(response);
        this.authorArray = response as Author[];
      });
  
  }
  }
