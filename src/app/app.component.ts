import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarFormComponent} from "./components/car-form/car-form.component";
import {CarsComponent} from "./components/cars/cars.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarFormComponent, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sep2023Angular';
}
