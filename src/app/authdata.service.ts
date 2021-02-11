import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import{Router}from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthdataService {
cUserFN:any=null;
cUserLN:any=null;
cUseremail:any=null;
cUserid:any=null;
cUsertoken:any=new BehaviorSubject<any>(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("userCurrentToken")!=null){
      this.cUsertoken.next(localStorage.getItem("userCurrentToken"));
      this._Router.navigate(['/Home'])
    }

    
    }
    sendRegisterData (loginData:object):Observable<any>{
      
     return this._HttpClient.post("url",loginData)

   }
   sendLoginData (userData:object):Observable<any>{
      
    return this._HttpClient.post("url",userData)

  }
  

   saveUserData(FN:string,LN:string,email:string,id:string,token:string){
            this.cUserFN=FN;
            this.cUserLN=LN;
            this.cUseremail=email;   
            this.cUserid=id;
            this.cUsertoken.next(token);

   }
  }

