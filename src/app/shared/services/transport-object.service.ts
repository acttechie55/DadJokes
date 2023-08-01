import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TransportObjectDataService {

    listPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    pageNumData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor() { }

    //Call this function to send only the Joke Service's JSON Data List of Jokes Only
    storePassedJokeListObject(passedData) {
        this.listPassedData.next(passedData);
    }

    //Call this function to send only the Joke Service's JSON Object with the Updated Page Number
    storePassedNumObject(passedData){
        this.pageNumData.next(passedData);
    }

    //Retrieve the Joke Service's JSON Data List of Jokes Only
    retrievePassedObject() {
        return this.listPassedData;

    }

    //Retrieve a new object with the updated page numbers from the <app-pagination> 
    retrievePageNumObject() {
        return this.pageNumData;
    }
}