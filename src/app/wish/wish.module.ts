import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WishListComponent} from './wish-list/wish-list.component'
// import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
// import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishComponent } from './wish.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WishComponent
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
