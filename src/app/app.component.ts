import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent} from './wish-list/wish-list.component'
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
