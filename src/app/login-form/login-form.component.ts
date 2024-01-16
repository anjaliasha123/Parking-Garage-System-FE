import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgModel, Validators } from '@angular/forms';
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
  constructor(private userLoginService: UserLoginService, private formBuilder: FormBuilder){}
  loginForm = this.formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onLogin(){
    let loginData : Object = {
      email : this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    };
    this.userLoginService.onLogin(loginData);
    // this.userLoginService.onLogin(this.loginObject);
  }
}
