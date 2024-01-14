import { Component } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Parking } from '../models/parking';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'Welcome to Home Page';
  registeredVehicles: Vehicle[] = [];
  parkedSpots: Parking[] = [];
}
