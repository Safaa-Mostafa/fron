import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpasswordRoutingModule } from './editpassword-routing.module';
import { EditpasswordComponent } from './editpassword.component';


@NgModule({
  declarations: [
    EditpasswordComponent
  ],
  imports: [
    CommonModule,
    EditpasswordRoutingModule
  ]
})
export class EditpasswordModule { }
