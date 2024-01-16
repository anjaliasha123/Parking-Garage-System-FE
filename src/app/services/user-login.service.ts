import { Injectable } from '@angular/core';
import { UserLoginController } from '../controllers/user-login.controller';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private userLoginController: UserLoginController, private router: Router) { }
  registerUser(user: Object){
    this.userLoginController.registerUser(user).subscribe(data =>{
      console.log('registered user data:');
      console.log(data);
      if(data){
        alert('Successfully registered user');
        this.router.navigateByUrl('/login');
      }else alert('Failure in registering user');
    });
  }
  onLogin(userData: any){
    this.userLoginController.loginUser(userData).subscribe((data: any) => {
      console.log(data);
      if(data.result){
        alert('Login success');
        localStorage.setItem('loginToken', data.data.token);
        this.router.navigateByUrl('/home');
      }else{
        alert(data.message)
      }
    });
  }
}
