import { Injectable } from '@angular/core';
import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkVehicleService {
  parkedVehicleList: Parking[] = [];
  constructor() { }
  getParkedVehicle(park: Parking){
    this.parkedVehicleList.push(park);
    console.log('current list of parked vehicles: ');
    console.log(this.parkedVehicleList);
  }
}
