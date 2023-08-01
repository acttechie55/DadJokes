import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

query: string;
 status: string = 'not ready';
 pageNum:number = 1;
 jsonData:any;
 //listPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
 json_data_url: string = 'https://icanhazdadjoke.com/search?term=';
 static readonly error_message: string = 'Something went wrong during data fetch: ';

 constructor(private http: HttpClient) {}


//Fetch API
fetchJsonData(query?:string, num?:number): Promise<any[]> {
    const jsonDataUrl: string = this.json_data_url + `${query}` + `&limit=10` + `&page=` + `${num}`;
    return fetch(jsonDataUrl,{
      headers: {
          Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then((jsonData: any[]) => {
        this.jsonData = jsonData;
        this.status = 'ready';
        return jsonData;})
      .catch((error) => this.defaultErrorHandler(error, jsonDataUrl));
}

//Error Handler
private defaultErrorHandler(error: any, jsonDataUrl: string): Promise<any> {
    console.warn(ApiService.error_message, error, jsonDataUrl);
    return Promise.reject(error);
}



getTodoJsonModuleData() {
  const jsonData = this.fetchJsonData(this.query);
  //console.log('import - todo json data: ', this.query, jsonData);
  console.log('from the service', jsonData)
 // this.listPassedData.next(jsonData);
   return jsonData;

}


}