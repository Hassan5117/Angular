import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent} from './wish-list/wish-list.component'
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WishFilterComponent, 
    WishListComponent, 
    AddWishFormComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WishFilterComponent, 
    WishListComponent, 
    AddWishFormComponent
  ]
})
export class WishModule { }
