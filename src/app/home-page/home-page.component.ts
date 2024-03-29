import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Parking } from '../models/parking';
import { RegisterCarService } from '../services/register-car.service';
import { ParkVehicleService } from '../services/park-vehicle.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  title = 'Welcome to Home Page';
  registeredVehicles: Vehicle[] = [];
  parkedSpots: Parking[] = [];

  constructor(private registerCarService: RegisterCarService, private parkingCarService: ParkVehicleService){}
  ngOnInit(): void{
    
    // this.parkingCarService.parkedVehicleListForHomePage.subscribe(data=> this.parkedSpots = data);
    this.registerCarService.getVehiclesByUserId(+localStorage.getItem("userId")!);
    this.registerCarService.registeredVehicles.subscribe(data => this.registeredVehicles = data);
    this.registerCarService.pushRegisteredVehiclesData();
    this.parkingCarService.getAllParkingsByUserId(+localStorage.getItem("userId")!);
    this.parkingCarService.parkedVehicleListForHomePage.subscribe(data=> this.parkedSpots = data);
  }
  onDeleteVehicle(v: Vehicle){
    console.log('delete vehicle: ',v);
    this.registerCarService.deleteCar(v);
  }
  onDeleteParking(p: Parking){
    console.log(p.id);
    this.parkingCarService.deleteParking(p.id!, +localStorage.getItem("userId")!);
  }
}
