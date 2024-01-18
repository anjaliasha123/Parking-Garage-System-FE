import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Parking } from "../models/parking";
@Injectable({
    providedIn: 'root'
})
export class ParkVehicleController{
    baseUrl = "http://localhost:8080/api/parking/";
    constructor(private http: HttpClient){}
    getAllGarages(){
        return this.http.get(this.baseUrl+"garages");
    }
    getGarageById(id: number){
        return this.http.get(this.baseUrl+"garages/"+id);
    }
    parkVehicle(park: Parking){
        return this.http.post(this.baseUrl+"space", park);
    }
    getAllParkingByUserId(userId: number){
        return this.http.get(this.baseUrl+"space?user="+userId);
    }
    deleteParking(parkId: number){
        return this.http.delete(this.baseUrl+"space/"+parkId);
    }
}