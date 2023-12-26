import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

import { CarsComponent } from './cars/cars.component';
import { GetAllCarsBrandsComponent } from './get-all-cars-brands/get-all-cars-brands.component';
import { AboutComponent } from '../about/about.component';
import {ContactComponent} from '../contact/contact.component'
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:"",component:BlogComponent},
    {path:"",component:FooterComponent},
    {path:'cars',component:CarsComponent},
    {path:'getallCars',component:GetAllCarsBrandsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'profile',component:ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
