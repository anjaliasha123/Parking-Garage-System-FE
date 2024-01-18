import { Component } from '@angular/core';
import { RegisterCarService } from '../services/register-car.service';
import { Vehicle } from '../models/vehicle';
import { Make } from '../models/make';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.css']
})
export class RegisterCarComponent {
  vt: String ='';
  vm: number= 0;
  // vmodel: String = '';
  plate: string = '';
  color: string = '';
 vehicleTypes: String[] = ['Car', 'Motorcycle', 'Truck', 'Trailer'];
 vehicleMakes: Make[] = [];
//  vehicleModels: String[] = [];
 constructor(private registerCarService: RegisterCarService, private router: Router){}
 getMakes(){
  this.vehicleMakes = []
  this.registerCarService.getVehicleMakes(this.vt);
  this.vehicleMakes = this.registerCarService.makes;
 }
//  getModels(){
//   this.vmodel = '';
//   this.vehicleModels = [];
//   this.registerCarService.getVehicleModel(this.vm);
//   this.vehicleModels = this.registerCarService.models;
//  }
 clearData(){
  this.vt = '';
  this.vm = 0;
  this.color = '';
  // this.vmodel = '';
  this.plate = '';
  this.vehicleMakes = [];
  // this.vehicleModels = [];
 }
 registerCar(){
  let vehicle : Vehicle = {
    makeId: this.vm,
    color: this.color,
    licensePlate: this.plate,
    userId : +localStorage.getItem('userId')!
  };
  this.registerCarService.registerCar(vehicle);
  this.clearData();
  this.router.navigateByUrl("/home");
 }
}
