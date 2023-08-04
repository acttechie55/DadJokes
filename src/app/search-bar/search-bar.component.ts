import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public jokeForm:FormGroup;
  searchBarPattern = "^[a-zA-Z]*$"; 
  jokeInput: string = "";
  jokeData: any;


  constructor(private formBuilder: FormBuilder, public jokeService: ApiService) {
    this.jokeForm = this.formBuilder.group({
      searchBar: ''
    });
  }


  get searchBar() {
    return this.jokeForm.get('searchBar');
  } 
  

  ngOnInit() {
  }


  //Capture the query and send it to the API 
  officialJokeSubmitBtn(){

    this.jokeInput = this.jokeForm.get('searchBar')?.value;

    //Run Fetch Method from Joke Service with Typed Query to get JSON Data 
    this.jokeService.fetchJsonData(this.jokeInput).then((jsonData) => {
      this.jokeData = jsonData;


    })

  }

}
