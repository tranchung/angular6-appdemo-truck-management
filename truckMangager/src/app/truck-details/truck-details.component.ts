import {Truck, TruckStatus} from '../truck';
import { Component, OnInit, Input } from '@angular/core';
import {TruckService}               from '../truck.service';
import { ActivatedRoute, Router }   from '@angular/router';
import {Globals}                    from "../global";

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.css']
})
export class TruckDetailsComponent implements OnInit {

  truck: Truck;
  status: { label: string, value: number }[] =  TruckStatus;

  constructor(private truckService: TruckService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.activeRoute.params.subscribe(params => {
      this.truck = Globals.trucks.find(x => x.id === +params['id']);
    });
  }

  onSubmit() {
    this.truckService.updateTruck(this.truck);
  }
}
