import { Component } from '@angular/core';
import { Car,BrandCars } from '../car';
import { ApiService } from 'src/app/api.service';
import { CarformComponent } from '../carform/carform.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarDialogComponent } from '../car-dialog/car-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent {
  users = [
 
  ];

  columns = [
    'id',
    'name',
    'role',
    'email',
    'action'
  ];
  constructor(private dialog: MatDialog,private api:ApiService,private router:Router){


  this.api.allUsers().subscribe(res=>{
    this.users=res.data
      })
    }}

  
  
    
    
 
