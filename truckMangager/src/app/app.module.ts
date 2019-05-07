import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { HttpClientModule } from '@angular/common/http';
import {Globals} from './global';
@NgModule({
  declarations: [
    AppComponent,
    CreateTruckComponent,
    TruckDetailsComponent,
    TruckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule { }
