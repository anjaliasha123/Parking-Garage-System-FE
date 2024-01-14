import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Parking } from '../models/parking';

@Component({
  selector: 'app-park-car',
  templateUrl: './park-car.component.html',
  styleUrls: ['./park-car.component.css']
})
export class ParkCarComponent {
  pf: Number = 0;
  floors: Number[] = [1,2,3,4];
  registeredFloors: Parking[] = [];
}
