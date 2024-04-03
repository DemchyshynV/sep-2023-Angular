import {Component, Input} from '@angular/core';
import {ICar} from "../../../../interfaces/car.interface";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()
  car: ICar;
}
