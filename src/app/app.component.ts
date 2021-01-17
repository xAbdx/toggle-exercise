import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  toggleTag() {
    this.items.push("")
    this.showMe = !this.showMe
  }
  showMe: boolean = true
  items = [];
  data: string;
  today: Number = Date.now();

  currentStyles = {
    'color': 'white'
  };


}