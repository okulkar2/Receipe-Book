import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  feature: string = 'receipe'; 

  onFeatureSelected(data: string){
    this.feature = data;
  }

}
