import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { brand } from 'src/app/search';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars:any=[]
  cities:any=[]
  car:any={}
  user:any={}
  brands:any=[]
  brand:brand={
   brandId:1,
   city:''
  }
  loadingImg :boolean = true
  constructor(public api:ApiService) {
    this.api.GetallCities().subscribe(city=>{
      for(let j = 0;j<30;j++){
        this.cities.push(city.data[j])

      }
    })
    this.api.getAllCars().subscribe(res=>{
  this.cars = res.data
  })
  this.api.getAllCategories().subscribe(res=>{
    this.brands.push(...res.data)


   })
   }

    ngOnInit(): void {

    }
    onBrandSelect(selectedValue: NgForm){

    }

    sortByPrice() {
      const selectElement = document.getElementById('validationCustom04') as HTMLSelectElement;
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const sortDirection = selectedOption.value === 'asc' ? 1 : -1;
      const query = `?sort=${sortDirection}`;
      this.api.sort(query).subscribe(items => {
        // Do something with the sorted items
        console.log(items);
      });
    }
 
}
