import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserLoginController{
    constructor(private http: HttpClient){}
    loginUser(loginData: any){
        return this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', loginData);
    }
    registerUser(userData: Object){
        return this.http.post('http://localhost:8080/api/parking/users', userData);
    }

}