import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserLoginService){}
  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required,Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]]
  });
  redirectToSignIn(){
    console.log(this.registerForm.value);
    this.route.navigateByUrl('/login');
  }
  onSubmit(){
    console.log(this.registerForm.value);
    let userObject: Object  = {
      firstName : this.registerForm.get("firstName")?.value,
      lastName: this.registerForm.get("lastName")?.value,
      email: this.registerForm.get("email")?.value,
      password: this.registerForm.get("password")?.value
    };
    this.userService.registerUser(userObject);
  }
}
