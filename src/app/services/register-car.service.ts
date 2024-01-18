import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RegisterCarController } from '../controllers/register-car.controller';
import { Vehicle } from '../models/vehicle';
import { BehaviorSubject, Subject } from 'rxjs';
import { Make } from '../models/make';

@Injectable({
  providedIn: 'root'
})
export class RegisterCarService {
  // this service is used to get the different vehicle makes based on the type of vehicle
  makes: Make[] = [];
  models: String[] = [];
  results : any[] = [];
  registeredVehiclesDummy: Vehicle[] = [];
  registeredVehicles: Subject<Vehicle[]> = new BehaviorSubject<Vehicle[]>([]);
  constructor(private registerCarController: RegisterCarController) { }
  getVehicleMakes(type: String){
    this.makes  = [];
    // this.registerCarController.getMakesByType(type).subscribe(data =>{
    //   this.results = data['Results'];
    //   for(let i=0; i <20; i++){
    //     this.makes.push(this.results[i]['MakeName'].toLowerCase());
    //     // console.log(this.results[i]['MakeName']);
    //   }
    // });  
    this.registerCarController.getMakesByType(type).subscribe(data =>{
      console.log(data);
      data.forEach((item:Make) => this.makes.push(item))
    });
  }
  // getVehicleModel(make: String){
  //   this.models = [];
  //   this.registerCarController.getModelByMake(make).subscribe(data =>{
  //     this.results = data['Results'];
  //     this.results.forEach(item =>{
  //       this.models.push(item["Model_Name"].toLowerCase());
  //       // console.log(item["Model_Name"]);
  //     });
  //   });
  // }
  pushRegisteredVehiclesData(){
    console.log("Pushing the data");
    this.registeredVehicles.next(this.registeredVehiclesDummy);
  }
  registerCar(vehicleData: Vehicle){
    this.registerCarController.addVehicle(vehicleData).subscribe(data =>{
      console.log('registered car:');
      console.log(vehicleData)
    });
    console.log("registered Car");
    this.registeredVehiclesDummy.push(vehicleData);
    this.pushRegisteredVehiclesData();
  }
  deleteCar(vehicle: Vehicle){
    this.registerCarController.deleteVehicle(vehicle).subscribe((data: any)=>{
      let newList =  this.registeredVehiclesDummy.filter(item => item.licensePlate != vehicle.licensePlate)
      this.registeredVehiclesDummy = newList;
      this.pushRegisteredVehiclesData();
      alert(data.status);
    })
  }
  getVehiclesByUserId(userId: number){
    this.registerCarController.getAllVehiclesByUserId(userId).subscribe((data: any)=>{
      console.log(data,' already registered cars');
      this.registeredVehiclesDummy = data;
      this.pushRegisteredVehiclesData();
    });
  }
  
}
