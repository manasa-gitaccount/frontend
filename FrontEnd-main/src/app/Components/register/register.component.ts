import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  register:FormGroup|any;
  ngOnInit(): void {
    
    this.register=new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl()

    })
  }

  registerdata(register:FormGroup) {
    console.log(this.register.value);

  }
}
