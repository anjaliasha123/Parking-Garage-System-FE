import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Parking } from '../models/parking';
import { RegisterCarService } from '../services/register-car.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  title = 'Welcome to Home Page';
  registeredVehicles: Vehicle[] = [];
  parkedSpots: Parking[] = [];

  constructor(private registerCarService: RegisterCarService){}
  ngOnInit(): void{
    this.registerCarService.registeredVehicles.subscribe(data => this.registeredVehicles = data);
    this.registerCarService.pushRegisteredVehiclesData();
  }
}
