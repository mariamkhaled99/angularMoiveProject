import { Component, OnInit } from '@angular/core';
import{AuthdataService}from '../authdata.service'
import{Router}from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginFlag:boolean=false;

  constructor(private _AuthdataService:AuthdataService,private _Router:Router) { 
    // if(_AuthdataService.cUsertoken==null){
    //   this.loginFlag=true;// false
    // }
    // else{
    //   this.loginFlag=true;//true
    //   this._Router.navigate(['/Home'])
    // }



    //---------------------------------------------------------------------------------------------------
    _AuthdataService.cUsertoken.subscribe((data:any)=>{
      if(data==null){
        this.loginFlag=false;// false
      }
      else{
          this.loginFlag=true;//true
          this._Router.navigate(['/Home'])
        }

    })
  }
  logout(){
    localStorage.removeItem("userCurrentToken");
    this._AuthdataService.cUsertoken.next(null);
    this._Router.navigate(['/LogIn'])
  }

  ngOnInit(): void {
  }

}
