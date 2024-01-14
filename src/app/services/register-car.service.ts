import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RegisterCarController } from '../controllers/register-car.controller';

@Injectable({
  providedIn: 'root'
})
export class RegisterCarService {
  // this service is used to get the different vehicle makes based on the type of vehicle
  makes: String[] = [];
  models: String[] = [];
  results : any[] = [];

  constructor(private registerCarController: RegisterCarController) { }
  getVehicleMakes(type: String){
    this.makes = [];
    this.registerCarController.getMakesByType(type).subscribe(data =>{
      this.results = data['Results'];
      for(let i=0; i <20; i++){
        this.makes.push(this.results[i]['MakeName'].toLowerCase());
        // console.log(this.results[i]['MakeName']);
      }
    });  
  }
  getVehicleModel(make: String){
    this.models = [];
    this.registerCarController.getModelByMake(make).subscribe(data =>{
      this.results = data['Results'];
      this.results.forEach(item =>{
        this.models.push(item["Model_Name"].toLowerCase());
        console.log(item["Model_Name"]);
      });
    });
  }
  registerCar(){}
}
