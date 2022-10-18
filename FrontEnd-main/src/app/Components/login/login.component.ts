import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/user-auth.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private userService: UserService,private userAuthService:UserAuthService ) { }
    
  ngOnInit():void {}
  login(loginForm:NgForm) {
    
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response.jwtToken);
        alert("Login Successful") ;
        

        
        this.userAuthService.setToken(response.jwtToken);
      },
      (error)=> {
        console.log(error);
      }
    );


    }
  }
    
  
  

