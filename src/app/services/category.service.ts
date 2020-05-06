import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Category } from "../models/category";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // API path
  base_path = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/json'
    })
  }

  // Handle Api Errors
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

  // Create new category

  // get single category data by ID
  getCategory(id): Observable<Category>{
    return this.http.get<Category>(this.base_path+'/category/desc/'+id).pipe(retry(2),catchError(this.handleError))
  }

  // Get Categories data
  getCategories(): Observable<Category>{
    return this.http.get<Category>(this.base_path+'/category').pipe(retry(2),catchError(this.handleError))
  }

  // update item by ID
  // updCategory(id, item)

  // Delete item by id
  delCategory(id): Observable<Category>{
    return this.http.delete<Category>(this.base_path+'/delete/'+id).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCtgryFood(name): Observable<Category>{
    return this.http.get<Category>(this.base_path+'/category/'+name).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

}
