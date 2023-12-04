import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isConnected = true;
  private user: string = "Hi Walid";
  imgAltText = 'user image ';
  constructor() { }
  ngOnInit(): void {
  }
  getUser():string{
    return this.user;
  }  

}
