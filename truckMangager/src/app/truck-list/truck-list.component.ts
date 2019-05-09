import { TruckDetailsComponent } from '../truck-details/truck-details.component';
import { Observable } from 'rxjs';
import { TruckService } from '../truck.service';
import { Truck } from '../truck';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Globals} from "../global";

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit {
  trucks: Truck[];

  constructor(private truckService: TruckService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.trucks = this.truckService.getTrucksList();
    console.log(this.trucks);
  }

  deleteTruck(id: number) {
    this.truckService.deleteTruck(id);
    this.reloadData();
  }

  editTruck(id: number) {
    this.router.navigateByUrl("/edit/"+id);
  }
}
