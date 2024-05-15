import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EventService} from './../../shared/services/EventService';


@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;

// @Input() wishText! : string;

// @Input() fullfilled! : boolean;
// @Output() fullfilledChange = new EventEmitter<boolean>();


  get cssClasses(){
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    // return {'strikeout': this.fullfilled, 'text-muted': this.fullfilled}
    return {'strikeout text-muted': this.wish.isComplete};
  }

  constructor(private events: EventService) {

  }

  removeWish() {
    this.events.emit('removeWish', this.wish)
  }


  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete
  }

}
