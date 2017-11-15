import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component'; 
import { ReceipeItemComponent } from './receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe-list/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppRouterModule } from './app-route.module';
import { InitialReceipeComponent } from './receipe-list/initial-receipe/initial-receipe.component';
import { ReceipeEditComponent } from './receipe-list/receipe-edit/receipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    InitialReceipeComponent,
    ReceipeEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
