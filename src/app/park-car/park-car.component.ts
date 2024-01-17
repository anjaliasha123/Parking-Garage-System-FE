import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Parking } from '../models/parking';
import { Vehicle } from '../models/vehicle';
import { RegisterCarService } from '../services/register-car.service';
import { ParkVehicleService } from '../services/park-vehicle.service';
import { Garage } from '../models/garage';

@Component({
  selector: 'app-park-car',
  templateUrl: './park-car.component.html',
  styleUrls: ['./park-car.component.css']
})
export class ParkCarComponent implements OnInit{
  pf: number = 0;
  ps: string = "";
  pv: String = "";
  garages : Garage[] = [];
  garageId: number = 0;
  garageIdWithFloor: any = new Object();
  showSpots: boolean = false;
  floors: number[] = [1,2];
  spots: string[] = [];
  floorObject: any[] = [
    {
      spot1 : false,
      spot2 : false,
      spot3 : false,
      spot4 : false
    },
    {
      spot1 : false,
      spot2 : false,
      spot3 : false,
      spot4 : false
    }
  ];
  registeredCar: Vehicle[] = [];
  constructor(private registerCarService: RegisterCarService, private parkVehicleService: ParkVehicleService){}
  ngOnInit(): void{
    this.registerCarService.registeredVehicles.subscribe(data => this.registeredCar = data);
    this.registerCarService.pushRegisteredVehiclesData();
  }
  setVehiclePlate(event: any){
    console.log("cheicle selected: ", event);
  }
  selectSpot(){
    this.spots = [];
    let dummySpots: Object = this.floorObject[this.pf-1];
    for(const [key,value] of Object.entries(dummySpots)){
      if(value === false) this.spots.push(key);
    }
  }
  parkVehicke(){
    let parkedVehicle: Parking = {
      garageId : +this.garageId,
      floorNumber: +this.pf,
      spotNumber: this.ps,
      userId : +localStorage.getItem("userId")!,
      vehicleId: this.pv,
    };
    console.log(parkedVehicle, ' parked vehicle');
    this.parkVehicleService.getParkedVehicle(parkedVehicle);
    // remove the parked vehicle from the registeredVehicle list
    let dummyRegisteredVehicleList = this.registeredCar.filter(data => data.licensePlate != parkedVehicle.vehicleId);
    this.registeredCar = dummyRegisteredVehicleList;
    this.parkVehicleService.getYourVehicleParked(parkedVehicle);
    this.floorObject[this.pf - 1][this.ps] = true;
    this.spots = [];
    this.pf = 0;
    this.ps = "";
    this.pv = "";
  }
  getGaragesList(){
    this.parkVehicleService.getAvailableGaragesFromDatabase();
    this.parkVehicleService.garagesListSubject.subscribe(data => {
      this.garages = data;
      console.log(data)
      this.garages.forEach(item =>{
        let numOfFloors:number = item.floors;
        let arr = [];
        for(let i=1; i<=numOfFloors; i++){
          arr.push(i);
        }
        this.garageIdWithFloor[item.id] = arr;
      })
    });
  }
  setFloorsForGarage(){
    this.floors = this.garageIdWithFloor[this.garageId];
  }
}
