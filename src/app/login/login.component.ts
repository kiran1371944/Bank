import { Component, OnInit } from '@angular/core';
import { ɵshimHostAttribute } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  header="Welcome to the World of Money Exchange"
  accPlaceholder="Enter 10 digit Account number"
  acno=""
  pswd=""
  database:any={
    1000:{acno:1000,username:'Hari',password:1000,balance:5000},
    1001:{acno:1001,username:'Anoop',password:1000,balance:15000},
    1002:{acno:1002,username:"Swathy",password:1000,balance:25000}
  }

  constructor() { }
  
  ngOnInit(): void {
  }
  /*the functions that we are creating defines only after ngOnInit()*/ 
  acnoChange(event:any){
    this.acno = event.target.value
  }
  pswdChange(event:any){
    this.pswd = event.target.value
    
  }
  login(){
    var acno = this.acno
    
    var pswd = this.pswd
    let userdetails = this.database
    if(acno in userdetails){

      if(pswd == userdetails[acno]['password']){
        alert('Login succesful')
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('User does not exist')
    }
    
  }
}
