import { Injectable } from '@angular/core';
import { UserLoginController } from '../controllers/user-login.controller';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  userLoginStatus: Subject<boolean> = new BehaviorSubject<boolean>(false);
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
    let emailId = userData.email;
    let pwd = userData.password;
    this.userLoginController.loginUser(emailId).subscribe((response: any)=>{
      if(response.status === 200){
        if(pwd === response.body['password']) {
          alert('Success login');
          this.userLoginStatus.next(true);
          localStorage.setItem('userId', response.body['id']);
          this.router.navigateByUrl('/home');
        }else alert('please re-enter password');
      }
    },
    error=> {
      console.log(error);
      alert('Please register');
      this.router.navigateByUrl('/register');
    }
    );
  }
}
