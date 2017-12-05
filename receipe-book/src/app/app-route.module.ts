import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { InitialReceipeComponent } from './receipe-list/initial-receipe/initial-receipe.component';
import { ReceipeDetailComponent } from './receipe-list/receipe-detail/receipe-detail.component';
import { ReceipeEditComponent } from './receipe-list/receipe-edit/receipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: ReceipeListComponent, children: [
        { path: '', component: InitialReceipeComponent },
        { path: 'new', component: ReceipeEditComponent },
        { path: ':id', component: ReceipeDetailComponent },
        { path: ':id/edit', component: ReceipeEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})

export class AppRouterModule {
}
