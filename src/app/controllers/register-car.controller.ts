import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class RegisterCarController{
    baseUrl="https://vpic.nhtsa.dot.gov/api/vehicles/";
    constructor(private http: HttpClient){}

    getMakesByType(type: String): Observable<any>{
        return this.http.get(this.baseUrl+"GetMakesForVehicleType/"+type+"?format=json");
    }
    getModelByMake(make: String): Observable<any>{
        return this.http.get(this.baseUrl+"getmodelsformake/"+make+"?format=json");
    }
}