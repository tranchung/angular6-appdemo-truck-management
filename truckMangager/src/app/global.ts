import { Injectable } from '@angular/core';
import {Truck} from './truck';

@Injectable()
export class Globals {
 public static trucks: Truck[] = [new Truck(1,'name1'),
   new Truck(2, 'name2'),
   new Truck(3, 'name3'),
   new Truck(4, 'name4'),
   new Truck(5, 'name5'),
 ];
 public static state: number = 0;
  constructor(){}
}
