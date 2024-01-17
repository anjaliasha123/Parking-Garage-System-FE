import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Parking Garage System';
  isAuthenticated: boolean = false;
  constructor(private userLoginService: UserLoginService){}
  ngOnInit(): void {
    this.userLoginService.userLoginStatus.subscribe(data => this.isAuthenticated = data);
  }
  onLogout(){
    this.isAuthenticated = false;
    localStorage.removeItem("userId");
  }

}
