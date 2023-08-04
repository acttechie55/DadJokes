import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {


  constructor(public jokeService: ApiService) { 
 
  }

  ngOnInit() {
  }


}