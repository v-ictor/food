import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Category } from "../models/category";
import { Observable, throwError } from "rxjs";
import { retry, catchError, delay } from "rxjs/operators";

import { FileTransfer, FileUploadOptions } from "@ionic-native/file-transfer/ngx";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // API path
  base_path = 'http://localhost:3000';

  constructor(private http: HttpClient, private transfer: FileTransfer) { }

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
      // 'Content-Type': 'application/json'
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
  // uploadCategoria(img, data){
  //   var options: FileUploadOptions = {
  //     fileKey: 'imageCtgory',
  //     chunkedMode: false,
  //     mimeType: 'multipart/form-data',
  //     params: {data}
  //   };
  //   const fileTransfer = this.transfer.create();
  //   return fileTransfer.upload(img, this.base_path+'/category/add', options);
  // }
  // createCategory(image, item){
  //   let postData = new FormData();
  //   postData.append('imageCtgory', image);
  //   postData.append('item', item);
  //   let data:Observable<any> = this.http.post<any>(this.base_path+'/add',postData, this.httpOptions);

  // }
  uploadFile(name: string, description: string, photo: File){
    const fd =  new FormData();
    fd.append('name', name);
    fd.append('description', description);
    fd.append('imageCtgory', photo);
    return this.http.post<Category>(this.base_path+'/category/add', fd);
  }

  // get single category data by ID
  getCategory(id){
    return this.http.get<Category>(this.base_path+'/category/desc/'+id).pipe(retry(2),catchError(this.handleError))
  }

  // Get Categories data
  getCategories(){
    return this.http.get<Category[]>(this.base_path+'/category').pipe(retry(2),catchError(this.handleError))
  }

  getCatEnab(){
    return this.http.get<Category[]>(this.base_path+'/category/enable').pipe(delay(1000));
  }

  // update item by ID
  updFile(id: string,name: string, description: string, photo: File){
    const fd = new FormData();
    fd.append('name', name);
    fd.append('description', description);
    fd.append('imageCtgory', photo);
    return this.http.put<Category>(this.base_path+'/category/update/'+id, fd);
  }
  updCategory(id: string, name: string, description: string){
    // const fd =  new FormData();
    // fd.append('name', name);
    // fd.append('description', description);
    return this.http.put(this.base_path+'/category/update/'+id, {name,description});
  }

  // Delete item by id
  delCategory(id): Observable<Category>{
    return this.http.delete<Category>(this.base_path+'/category/delete/'+id).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  enableCtgry(id: string){
    return this.http.get<Category>(this.base_path+'/category/turn/'+id);
  }

  getCtgryFood(name){
    return this.http.get<any[]>(this.base_path+'/category/'+name).pipe(
      delay(1000),
      retry(2),
      catchError(this.handleError)
    )
  }

}
