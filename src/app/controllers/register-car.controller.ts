import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicle } from "../models/vehicle";
@Injectable({
    providedIn: 'root'
  })
export class RegisterCarController{
    // baseUrl="https://vpic.nhtsa.dot.gov/api/vehicles/";
    baseUrl = "http://localhost:8080/api/parking/";
    constructor(private http: HttpClient){}

    getMakesByType(type: String): Observable<any>{
        // return this.http.get(this.baseUrl+"GetMakesForVehicleType/"+type+"?format=json");
        return this.http.get(this.baseUrl+'makes');
    }
    // getModelByMake(make: String): Observable<any>{
    //     return this.http.get(this.baseUrl+"getmodelsformake/"+make+"?format=json");
    // }
    addVehicle(vehicleData: Vehicle){
        return this.http.post(this.baseUrl+"vehicles", vehicleData);
    }
    deleteVehicle(vehicleData: Vehicle){
        return this.http.delete(this.baseUrl+"vehicles?vehicleId="+vehicleData.licensePlate);
    }
}