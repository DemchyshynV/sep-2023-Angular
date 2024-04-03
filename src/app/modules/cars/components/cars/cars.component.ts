import {Component, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces/car.interface";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: ICar[]

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value.items)
  }
}
