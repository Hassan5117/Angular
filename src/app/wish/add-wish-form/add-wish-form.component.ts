import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();
  
  
  newWishText = '';

  addNewWish() {
    // todo: add the wish to the items array
    // clear the textbox
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';


  }

}
