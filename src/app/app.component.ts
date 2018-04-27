import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchProfileService } from './search-profile.service';
import { Account } from './account.interface';
@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DHTL';
  imgSrc = 'http://www.royalpetcareinc.com/wp-content/uploads/2016/11/pets_big.png';
  allowChangeTitle = false;

  posts = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
  ];

  dob = + (new Date());

  accounts: Account[] = [];
  constructor(private searchSvc: SearchProfileService) { }
  search(query) {
    this.searchSvc.doSearch(query)
    .pipe(
      map(res => res.items)
    )
    .subscribe(res => this.accounts = res);
  }


  changePermission() {
    this.allowChangeTitle = !this.allowChangeTitle;
  }
  changeImage() {
    this.imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3PpIJr8b_PBVUC6f_LqbF0SmEok5yaOpyK963byYIGiIBoyp';
  }
}
