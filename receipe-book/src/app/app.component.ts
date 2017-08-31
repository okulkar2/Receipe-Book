import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  receipeList: boolean = false;
  shoppingList: boolean = false;

  onReceipeClicked(receipeData: {clicked: boolean}){
    this.receipeList = receipeData.clicked;
    this.shoppingList = false;
  }

  onShoppingClicked(shoppingData: {clicked: boolean}){
    this.shoppingList = shoppingData.clicked;
    this.receipeList = false;
  }

}
