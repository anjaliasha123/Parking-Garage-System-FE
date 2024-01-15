import { Injectable } from '@angular/core';
import { Parking } from '../models/parking';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkVehicleService {
  parkedVehicleList: Parking[] = [];
  parkedVehicleListForHomePage: Subject<Parking[]> = new BehaviorSubject<Parking[]>([]);
  constructor() { }
  getParkedVehicle(park: Parking){
    this.parkedVehicleList.push(park);
    console.log('current list of parked vehicles: ');
    console.log(this.parkedVehicleList);
    this.setParkedVehicleListForHomePage();
  }
  setParkedVehicleListForHomePage(){
    this.parkedVehicleListForHomePage.next(this.parkedVehicleList);
  }
}
