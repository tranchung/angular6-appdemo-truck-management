import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'truck', pathMatch: 'full' },
  { path: 'list', component: TruckListComponent },
  { path: 'add', component: CreateTruckComponent },
  { path: 'edit/:id', component: TruckDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
