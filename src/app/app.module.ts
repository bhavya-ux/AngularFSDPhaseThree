import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { FlighsearchComponent } from './flighsearch/flighsearch.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightbyIdComponent } from './flightby-id/flightby-id.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { PassengerbyIdComponent } from './passengerby-id/passengerby-id.component';
import { RemoveflightComponent } from './removeflight/removeflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';
import { UserComponent } from './user/user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserIdComponent } from './user-id/user-id.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddadminComponent } from './addadmin/addadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    FlighsearchComponent,
    AddFlightComponent,
    FlightbyIdComponent,
    FlightlistComponent,
    PassengerbyIdComponent,
    RemoveflightComponent,
    UpdateflightComponent,
    AdminComponent,
    ProductComponent,
    ProductByIdComponent,
    UserComponent,
    AddProductComponent,
    UserIdComponent,
    AdduserComponent,
    AddadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
