import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  
  isLoading: boolean = true;
  listData: any = {};

  constructor(public jokeService: ApiService, private renderer: Renderer2) { 
 
  }

  ngOnInit() {
  }


}