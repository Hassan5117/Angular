import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactComponent,
    
  ],
  exports: [
    ReactiveFormsModule,
    ReactiveFormsModule,
    ContactComponent
  ]
})
export class ContactModule { }
