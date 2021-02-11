import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators}from '@angular/forms'
import{AuthdataService}from '../authdata.service'
import{Router}from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myRegisterForm:any;
  constructor(private _AuthdataService:AuthdataService,private _Router:Router) {
   this. myRegisterForm = new FormGroup(
      {
        'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        'age':new FormControl(null,[Validators.required,Validators.min(20),Validators.max(40)]),
        'e-mail':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][0-9]+$')])

      }
    )

   }
   getRegisterForm(registerForm:FormGroup){
     console.log(registerForm.value);
     this._AuthdataService.sendRegisterData(registerForm.value).subscribe((data)=>{
       if(data.message=="success"){
         this._Router.navigate(['/LogIn'])

       }

     })

   }
  ngOnInit(): void {
  }

}
