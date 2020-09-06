import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlighsearchComponent } from './flighsearch/flighsearch.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightbyIdComponent } from './flightby-id/flightby-id.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { PassengerbyIdComponent } from './passengerby-id/passengerby-id.component';
import { RemoveflightComponent } from './removeflight/removeflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { ProductComponent } from './product/product.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';
import { UserComponent } from './user/user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserIdComponent } from './user-id/user-id.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { AddadminComponent } from './addadmin/addadmin.component';


const routes: Routes = [
  // {path:"flighsearch",component:FlighsearchComponent},
  // {path:"addflight",component:AddFlightComponent},
  // {path:"flightbyID",component:FlightbyIdComponent},
  // {path:"flightlist",component:FlightlistComponent},
  // {path:"passengerbyId",component:PassengerbyIdComponent},
  // {path:"removeflight",component:RemoveflightComponent},
  // {path:"updateflight",component:UpdateflightComponent},
  {path:"productlist",component:ProductComponent},
  {path:"productById",component:ProductByIdComponent},
  {path:"userlist",component:UserComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"userById",component:UserIdComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"adminlist",component:AdminComponent},
  {path:"addadmin",component:AddadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
