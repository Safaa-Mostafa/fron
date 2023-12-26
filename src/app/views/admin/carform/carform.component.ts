import { ApiService } from 'src/app/api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.scss']
})
export class CarformComponent {
dh:any
dj:any
  carForm: FormGroup;
Brands:any=[]
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CarformComponent>,private api:ApiService
  ) {
    this.carForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      rentalstartDate: ['', Validators.required],
      rentalendDate: ['', Validators.required],
      dailyRentalRate: ['', Validators.required],
      airConditioner: [false],
      transmission: ['', Validators.required],
      numberOfDoors: ['', Validators.required],
      brand: ['', Validators.required]
    });

    this.api.getAllCategories().subscribe(res=>{
      this.Brands.push(...res.data)
     })
  }

  onSubmit() {
    if (this.carForm.valid) {
      const carData = this.carForm.value;
      this.dialogRef.close(carData);
      console.log(carData)
      this.dj=localStorage.getItem('userName')
      this.dh = JSON.parse(this.dj);
      carData.userId = this.dh._id
this.api.addCar(carData).subscribe(res=>{
location.reload()
})
    }

  }

  onCancel() {
    this.dialogRef.close();
location.reload()
  }
}
