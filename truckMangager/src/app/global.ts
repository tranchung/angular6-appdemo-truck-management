import { Injectable } from '@angular/core';
import {Truck} from './truck';

@Injectable()
export class Globals {
 public static trucks: Truck[] = [new Truck(1,'name1'), new Truck(2, 'name2')];
  constructor(){}
}
