import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Truck} from './truck';
import axios, {AxiosPromise} from 'axios';
import {Globals} from './global';
import { Router } from "@angular/router";
import {TruckListComponent} from "./truck-list/truck-list.component";

@Injectable({
  providedIn: 'root'
})

export class TruckService {

  private baseUrl = '/trucks';

  constructor(private http: HttpClient, private router : Router) { }

  getTruck(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTruck(truck: Truck): void {
     console.log(truck);
     axios.post(`${this.baseUrl}`, truck).then(resp => {
      alert("Create sucess");
      Globals.trucks.push(truck);
      this.router.navigateByUrl("/list");
    }).catch(error => {
      alert(error);
    });
  }

  updateTruck(truck: Truck): void {
     axios.put(`${this.baseUrl}/${truck.id}`, truck).then(resp => {
      alert("Update sucess");
      const foundedIndex = Globals.trucks.findIndex(x => x.id === truck.id);
      Globals.trucks[foundedIndex] = truck;
      this.router.navigateByUrl("/list");
    }).catch(error => {
      alert(error);
    });
  }

  deleteTruck(id: number): void {
    axios.delete(`${this.baseUrl}/${id}`)
      .then(resp => {
        alert("Delete sucess");
      }).catch(error => {
      alert(error);
    });
  }

  getTrucksList(): AxiosPromise<any> {
    return axios.get(`${this.baseUrl}`);
  }

}
