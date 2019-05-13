export class Truck {
  id: number;
  t_code?: string;
  cargos?: number[];
  driver?: string;
  type?: number;
  price?: number;
  dimension?: string;
  parking?: string;
  production_year?: string;
  status?: number;
  description?: string;

  constructor(
    id ?: number,
    t_code ?: string,
    cargos?: number[],
    driver?: string,
    type?: number,
    price?: number,
    dimension?: string,
    parking?: string,
    production_year?: string,
    status?: number,
    description?: string,
  ) {
    this.id = id;
    this.t_code = t_code;
    this.cargos = cargos;
    this.driver = driver;
    this.type = type;
    this.price = price;
    this.dimension = dimension;
    this.parking = parking;
    this.production_year = production_year;
    this.status = status;
    this.description = description;
  }
}

 export const Cargo: { label: string, value: number }[] = [
    { value: 1,  label:'Computer'},
    { value: 2,  label:'Vegetable'},
    { value: 3,  label:'Kid toys'},
    { value: 4,  label:'Electronic'}
  ];

export const TruckStatus: { label: string, value: number }[] = [
    { value: 1,  label:'In-use'},
    { value: 2,  label:'New'},
    { value: 3,  label:'Stoped'}
  ]





