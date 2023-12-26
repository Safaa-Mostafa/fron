import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from '../car';
import { CarDialogComponent } from '../car-dialog/car-dialog.component';
import { CarformComponent } from '../carform/carform.component';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'dashboard';
  token:any
  cars = [
 
  ];

  columns = [
    'id',
    'name',
    'city',
    'rentalstartDate',
    'rentalendDate',
    'dailyRentalRate',
    'airConditioner',
    'transmission',
    'numberOfDoors',
    'brand',
    'action'
  ];
  constructor(private dialog: MatDialog,private api:ApiService,private router:Router){
    this.api.getAllCars().subscribe(res=>{
  this.cars=res.data
    })
  }
  openDialog(){
    const dialogRef = this.dialog.open(CarformComponent, {
      width: '500px',
      disableClose: true,
    });

  }
  onDelete(carId:any){
    let d=confirm("You are sure you want to delete")
      if(d){
    this.api.deleteCar(carId).subscribe(res=>{
      location.reload();

    })
  }else{
    this.router.navigateByUrl('/dashboard/home/cars')

  }
  }


  onShow(carId: any) {
    this.api.showCar(carId).subscribe(car => {
      const dialogRef = this.dialog.open(CarDialogComponent, {
        width: '500px',
        data: car
      });
  
      // Handle the dialog close event
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

}
