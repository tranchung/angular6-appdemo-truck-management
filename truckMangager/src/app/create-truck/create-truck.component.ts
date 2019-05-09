import { TruckService }      from '../truck.service';
import { Truck }             from '../truck';
import { Component, OnInit } from '@angular/core';
import { Globals}            from "../global";
import { Router }            from "@angular/router";

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {

  truck: Truck = new Truck();
  submitted    = false;

  constructor(private truckService: TruckService, private router: Router) { }

  ngOnInit() {}

  create() {
    const lastTruck = Globals.trucks.length-1;
    this.truck.id   = Globals.trucks[lastTruck].id + 1;
    this.truckService.createTruck(this.truck);
    this.router.navigateByUrl('/trucks');
  }

  onSubmit() {
    this.create();
  }
}
