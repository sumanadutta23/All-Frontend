import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081";

  constructor(private http:HttpClient) { }

  //calling the server to generate token

  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/token`,credentials)
    // .subscribe(
      // response:any)=>{
      // //success
      //   console.log(response.token);

      // },
      // error()=>{
      //   console.log(error);
      // }
      // //error
      
    // }
  }

  //for login user
  loginUser(token: any){
    localStorage.setItem("token",token)
    return true;
  }

  //to check that user is login or not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' ||token==null){
      return false;
    }
    else{
      return true;
    }
  }

  //for logout the user
  logout(){
    localStorage.removeItem('token')
    return true;
  }

  //for get token
  getToken(){
    return localStorage.getItem("token")
  }

}