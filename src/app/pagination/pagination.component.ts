import { Component, OnInit } from '@angular/core';
import { TransportObjectDataService } from '../shared/services/transport-object.service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagesData: any = Object;
  updatedJsonData: any = Object;

  constructor(public jokeService:ApiService, public transportObjectData:TransportObjectDataService) {
    
    //Retrieves Entire JSON Data from Transport Service That Contains Info Regarding Page Number (i.e. "current_page, etc")
    this.transportObjectData.retrievePageNumObject().subscribe(data => {
      this.pagesData = data;
    });

  }

  ngOnInit(): void {}

  /** Set page number and Send To Joke Service*/
  selectPageNumber(pageNumber: number) {
    this.pagesData.current_page = pageNumber;
    //Send Updated Page Number to JSON Data in Joke Service 
    this.jokeService.fetchJsonData(this.pagesData.search_term, pageNumber).then((jsonData) => {
      this.updatedJsonData = jsonData;
  
      //Send Updated New Joke List to Transport Service
      this.transportObjectData.storePassedJokeListObject(this.updatedJsonData.results);
    })
  }

  /** Set next page number */
  nextPage() {
    const nextPage = this.pagesData.current_page + 1;
    this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  prevPage() {
    const prevPage = this.pagesData.current_page - 1;
    this.selectPageNumber(prevPage);
  }

  /** Return list of numbers from 0 to n-1 **/
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}