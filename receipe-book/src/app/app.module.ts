import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component'; 
import { ReceipeItemComponent } from './receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe-list/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
