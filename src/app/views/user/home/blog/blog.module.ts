import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
  ]
})
export class BlogModule { }
