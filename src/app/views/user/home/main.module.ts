import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

import { CarsComponent } from './cars/cars.component';
import { GetAllCarsBrandsComponent } from './get-all-cars-brands/get-all-cars-brands.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    BlogComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
DetailsComponent,
    CarsComponent,
    GetAllCarsBrandsComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class MainModule { }
