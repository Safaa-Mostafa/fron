import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material/material.module'
import { ControlRoutingModule } from './control-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarsComponent } from '../cars/cars.component';
import { HeaderComponent } from '../header/header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavbarComponent } from '../../user/home/navbar/navbar.component';
import { CarformComponent } from '../carform/carform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CarDialogComponent } from '../car-dialog/car-dialog.component';
import { AllusersComponent } from '../allusers/allusers.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidenavComponent,
    CarsComponent,
    CarformComponent,
    CarDialogComponent,
    AllusersComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem('access_token');
        },
        allowedDomains:['localhost:4200'],
      }
    })
  ],
  entryComponents: [CarDialogComponent]
})
export class ControlModule { }
