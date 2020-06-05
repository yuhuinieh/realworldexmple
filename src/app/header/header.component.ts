import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  link = {
    url: 'http://google.com',
    target: '_blank'
  };
  nav = {
    title: 'Home'
  }
  username = 'doris';
  constructor() { }

  ngOnInit() {
  }
  doSomething() {
    alert('Hello!');
  }
}
