import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginObject : any = {
    EmailId: "",
    Password: ""
  };
  constructor(private userLoginService: UserLoginService){}
  onLogin(){
    this.userLoginService.onLogin(this.loginObject);
  }
}
