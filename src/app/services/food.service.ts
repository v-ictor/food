import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Food } from "../models/food";
import { Observable, throwError } from "rxjs";
import { retry, catchError, delay } from "rxjs/operators";

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

  getFood(id){
    return this.http.get<Food>(this.base_path+'/foods/desc/'+id).pipe(delay(1000),retry(2),catchError(this.handleError));
  }

  getsFood(){
    return this.http.get<Food[]>(this.base_path+'/foods').pipe(delay(1000),retry(2),catchError(this.handleError));
  }

  getsFoodEnab(){
    return this.http.get<Food[]>(this.base_path+'/foods/enable').pipe(delay(500));
  }

  delFood(id): Observable<Food>{
    return this.http.delete<Food>(this.base_path+'/foods/delete/'+id).pipe(retry(2),catchError(this.handleError));
  }

  uploadFood(title: string, description: string, price: string, ingredients: string, category:string, photo: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('ingredients', ingredients);
    fd.append('category', category);
    fd.append('imageFood', photo);
    return this.http.post(this.base_path+'/foods/add', fd);
  }

  updFood(id: string, title: string, description: string, price: string, ingredients: string, category:string){
    return this.http.put(this.base_path+'/foods/update/'+id, {title,description,price,ingredients,category});
  }

  enableFood(id: string){
    return this.http.get(this.base_path+'/foods/turn/'+id);
  }

  updFoodFile(id: string, title: string, description: string, price: string, ingredients: string, category:string, photo: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('ingredients', ingredients);
    fd.append('category', category);
    fd.append('imageFood', photo);
    return this.http.put(this.base_path+'/foods/update/'+id, fd);
  }

}
