import { Observable } from 'rxjs';
import { TruckService } from '../truck.service';
import {Cargo, Truck, TruckStatus} from '../truck';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AxiosPromise} from "axios";
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
    this.truckService.getTrucksList().then(response => {
      console.log(response);
      this.trucks = response.data;
      Globals.trucks = this.trucks;
    });
  }

  deleteTruck(id: number) {
    this.truckService.deleteTruck(id);
    this.reloadData();
  }

  editTruck(id: number) {
    this.router.navigateByUrl("/edit/"+id);
  }

  getCargo(value: number): string {
    const cargo = Cargo.find(x => x.value ===  Number(value)).label;
    return cargo;
  }

  getStatus(value: number): string {
    const status = TruckStatus.find(x => x.value ===  Number(value)).label;
    return status;
  }

}
