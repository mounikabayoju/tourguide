import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PageNotGoundComponent } from './page-not-gound/page-not-gound.component';
import { PageComponent } from './page/page.component';
import { AccomodationComponent } from './services/accomodation/accomodation.component';
import { CarsComponent } from './services/cars/cars.component';
import { CruiseComponent } from './services/cruise/cruise.component';
import { FlightsComponent } from './services/flights/flights.component';
import { FoodComponent } from './services/food/food.component';
import { NearbyTourismComponent } from './services/nearby-tourism/nearby-tourism.component';
import { RestaurantsComponent } from './services/restaurants/restaurants.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"gallery", component:GalleryComponent},
  {path:"page", component:PageComponent}, 
  {path:"enquiry", component:EnquiryComponent},
  {path:"services", component:ServicesComponent,children:[
    {path:"accomodation", component:AccomodationComponent},
    {path:"food", component:FoodComponent},
    {path:"cars", component:CarsComponent},
    {path:"flights",component:FlightsComponent},
    {path:"cruise", component:CruiseComponent}
  ]},
  // {path:'**', component:PageNotGoundComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
