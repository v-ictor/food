import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Food } from "../models/food";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  base_path = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:', error.error.message);
    } else {
      console.error(`
        Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later');
  }

  getFood(id): Observable<Food>{
    return this.http.get<Food>(this.base_path+'/foods/desc/'+id).pipe(retry(2),catchError(this.handleError));
  }

  getsFood(): Observable<Food>{
    return this.http.get<Food>(this.base_path+'/foods').pipe(retry(2),catchError(this.handleError));
  }

  delFood(id): Observable<Food>{
    return this.http.delete<Food>(this.base_path+'/delete/'+id).pipe(retry(2),catchError(this.handleError));
  }


}
