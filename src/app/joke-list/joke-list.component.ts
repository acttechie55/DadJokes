import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { TransportObjectDataService } from '../shared/services/transport-object.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  
  isLoading: boolean = true;
  status: string = 'loading';
  listData: any = {};

  constructor(public jokeService: ApiService, public transportObjectData:TransportObjectDataService, private renderer: Renderer2) { 
  
  this.transportObjectData.retrievePassedObject().subscribe(data => {
      this.listData = data;
  });
  }

  ngOnInit() {
  }


}