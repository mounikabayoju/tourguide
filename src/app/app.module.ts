import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageComponent } from './page/page.component';
import { ServicesComponent } from './services/services.component';
import { AccomodationComponent } from './services/accomodation/accomodation.component';
import { FoodComponent } from './services/food/food.component';
import { RestaurantsComponent } from './services/restaurants/restaurants.component';
import { NearbyTourismComponent } from './services/nearby-tourism/nearby-tourism.component';
import { PageNotGoundComponent } from './page-not-gound/page-not-gound.component';
import { CarsComponent } from './services/cars/cars.component';
import { FlightsComponent } from './services/flights/flights.component';
import { CruiseComponent } from './services/cruise/cruise.component';
import { EnquiryComponent } from './enquiry/enquiry.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    PageComponent,
    ServicesComponent,
    AccomodationComponent,
    FoodComponent,
    RestaurantsComponent,
    NearbyTourismComponent,
    PageNotGoundComponent,
    CarsComponent,
    FlightsComponent,
    CruiseComponent,
    EnquiryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
