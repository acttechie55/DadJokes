import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagesData: any = Object;
  updatedJsonData: any = Object;

  constructor(public jokeService:ApiService) {
  

  }

  ngOnInit(): void {}

  /** Set page number and Send To Joke Service*/
  selectPageNumber(pageNumber: number) {
    this.jokeService.jsonData.current_page = pageNumber;
    //Send Updated Page Number to JSON Data in Joke Service 
    this.jokeService.fetchJsonData(this.jokeService.jsonData.search_term, pageNumber).then((jsonData) => {
      this.updatedJsonData = jsonData;
    })
  }

  /** Set next page number */
  nextPage() {
    const nextPage = this.jokeService.jsonData.current_page + 1;
    this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  prevPage() {
    const prevPage = this.jokeService.jsonData.current_page - 1;
    this.selectPageNumber(prevPage);
  }

  /** Return list of numbers from 0 to n-1 **/
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}