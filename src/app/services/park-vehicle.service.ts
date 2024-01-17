import { Injectable } from '@angular/core';
import { Parking } from '../models/parking';
import { BehaviorSubject, Subject } from 'rxjs';
import { Garage } from '../models/garage';
import { ParkVehicleController } from '../controllers/park-vehicle.controller';

@Injectable({
  providedIn: 'root'
})
export class ParkVehicleService {
  parkedVehicleList: Parking[] = [];
  garagesList: Garage[] = [];
  garagesListSubject : Subject<Garage[]> = new BehaviorSubject<Garage[]>([]);
  parkedVehicleListForHomePage: Subject<Parking[]> = new BehaviorSubject<Parking[]>([]);
  constructor(private parkeVehicleController: ParkVehicleController) { }
  getParkedVehicle(park: Parking){
    this.parkedVehicleList.push(park);
    console.log('current list of parked vehicles: ');
    console.log(this.parkedVehicleList);
    this.setParkedVehicleListForHomePage();
  }
  setParkedVehicleListForHomePage(){
    this.parkedVehicleListForHomePage.next(this.parkedVehicleList);
  }
  getAvailableGaragesFromDatabase(){
    this.garagesList = [];
    this.parkeVehicleController.getAllGarages().subscribe((data: any) =>{
      this.garagesList = data;
      this.pushGarageList();
    });
  }
  pushGarageList(){
    this.garagesListSubject.next(this.garagesList);
  }
  getYourVehicleParked(park: Parking){
    this.parkeVehicleController.parkVehicle(park).subscribe(data=>{
      console.log(data);
    });
  }
}
