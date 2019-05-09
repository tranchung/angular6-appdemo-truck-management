import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Truck} from './truck';
import {Globals} from './global';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  private baseUrl = '/api/v1/trucks';

  constructor(private http: HttpClient) { }

  getTruck(id: number): Observable<Truck> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTruck(truck: Truck): void {
    Globals.trucks.push(truck);
    alert("Create Sucess");

  }

  updateTruck(truck: Truck): void {
    const foundedIndex = Globals.trucks.findIndex(x => x.id === truck.id);
    Globals.trucks[foundedIndex] = truck;
   alert("Update Sucess!");
  }

  deleteTruck(id: number): void {
    Globals.trucks =  Globals.trucks.filter( x => x.id !== id);
  }

  getTrucksList(): Truck[] {
    return Globals.trucks;
  }

}
