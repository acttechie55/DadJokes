import { Component } from '@angular/core';
import { ApiService } from '../app/shared/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ApiService
  ]
})
export class AppComponent {
  title = 'Dad jokes';
  constructor(public jokeService: ApiService,) {
    
  }


}