import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserLoginController{
    constructor(private http: HttpClient){}
    loginUser(email: string){
        return this.http.get("http://localhost:8080/api/parking/users?emailId="+email, {observe: 'response'});
    }
    registerUser(userData: Object){
        return this.http.post('http://localhost:8080/api/parking/users', userData);
    }

}