import { TruckService }      from '../truck.service';
import {Cargo, Truck, TruckStatus} from '../truck';
import { Component, OnInit } from '@angular/core';
import { Globals}            from "../global";
import { Router }            from "@angular/router";

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})


export class CreateTruckComponent implements OnInit {

  truck: Truck;
  status: { label: string, value: number }[] =  TruckStatus;
  constructor(private truckService: TruckService, private router: Router) {this.truck = new Truck(); }

  ngOnInit() {
  }

  create() {
    const length =  Globals.trucks.length;
    if (length > 0) {
      const lastTruck = length - 1;
      this.truck.id   = Globals.trucks[lastTruck].id + 1;
    } else {
      this.truck.id = 1;
    }
    this.truckService.createTruck(this.truck);
  }

  onSubmit() {
    this.create();
  }
}
