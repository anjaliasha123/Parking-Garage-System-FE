import { Component } from '@angular/core';
import { RegisterCarService } from '../services/register-car.service';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.css']
})
export class RegisterCarComponent {
  vt: String ='';
  vm: String = '';
  vmodel: String = '';
  plate: String = '';
 vehicleTypes: String[] = ['Car', 'Motorcycle', 'Truck', 'Trailer'];
 vehicleMakes: String[] = [];
 vehicleModels: String[] = [];
 constructor(private registerCarService: RegisterCarService){}
 getMakes(){
  this.vehicleMakes = []
  this.registerCarService.getVehicleMakes(this.vt);
  this.vehicleMakes = this.registerCarService.makes;
 }
 getModels(){
  this.vmodel = '';
  this.vehicleModels = [];
  this.registerCarService.getVehicleModel(this.vm);
  this.vehicleModels = this.registerCarService.models;
 }
 registerCar(){}
}
