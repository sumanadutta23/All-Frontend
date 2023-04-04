import { Component ,OnInit, } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  credential={
    username:'',
    password:'',
  }
constructor(private loginService:LoginService){} 

  OnSubmit(){
    console.log("form is submitted");
    if((this.credential.username!='' && this.credential.password!='') && (this.credential.username!=null && this.credential.password!=null)){
      console.log("We have to submit the details");
      //token generate
      this.loginService.generateToken(this.credential).subscribe(
        (response: any) => {
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard"
        },
        error=>{
          console.log(error);
          
        }
      )
    }
    else{
      console.log("Value are required");
    }
  }
}

