import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishListComponent, WishFilterComponent, AddWishFormComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items : WishItem[] = [];
  // items : WishItem[] = [
  //   new WishItem('To Learn Angular'),
  //   new WishItem('Get Coffee', true),
  //   new WishItem('Find grass that cuts itself')
  // ];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      //remove wish from items
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
      
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data : any) => {
      this.items = data;
    },
    (error: any) => {
      alert(error.message);
    }
  );
  }

  filter : any;
}
