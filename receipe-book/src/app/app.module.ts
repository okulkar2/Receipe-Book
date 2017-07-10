import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { ReceipeListComponent } from './receipe-list/receipe-list.component' 
import { ReceipeItemComponent } from './receipe-list/receipe-item/receipe-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
