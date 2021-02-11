import { Component, OnInit } from '@angular/core';
import{AuthdataService}from '../authdata.service'
import { FormControl,FormGroup,Validators}from '@angular/forms'
import{Router}from '@angular/router'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  myLoginForm:any;
  constructor(private _AuthdataService:AuthdataService,private _Router:Router) { 
    this.myLoginForm = new FormGroup(

      {
        'e-mail':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][0-9]+$')])
      }
    )
  }

  getLoginForm(LoginForm :FormGroup){
    console.log(LoginForm.value);
    this._AuthdataService.sendLoginData(LoginForm .value).subscribe((data)=>{
      console.log(data)

      
      if(data.message=="success"){
        localStorage.setItem("userCurrentToken",data.token);
        this._AuthdataService.saveUserData(data.first_name,data.last_name,data.email,data.id,data.token)
        this._Router.navigate(['/Home'])
      }

      

     
    })

  }
  
  

  
  ngOnInit(): void {
  }

}
