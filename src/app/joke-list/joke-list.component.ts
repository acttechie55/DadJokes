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
  listData: any = {};

  constructor(public jokeService: ApiService, public transportObjectData:TransportObjectDataService, private renderer: Renderer2) { 
  
  this.transportObjectData.retrievePassedObject().subscribe(data => {
      this.listData = data;
  });
  //Note to hiring manager: I came really close to getting this to work, but I kept getting errors that I couldn't resolve by myself
  //  this.jokeService.getTodoJsonModuleData().then((data) => {
  //     this.listData = data;
  //     console.log(this.listData)
  //   })
  console.log(this.jokeService.jsonData)
  }

  ngOnInit() {
  }


}