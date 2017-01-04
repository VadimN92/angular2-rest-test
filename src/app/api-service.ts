import { Injectable } from '@angular/core';
import {Request, Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';

@Injectable()
@BaseUrl("http://localhost:3000/api")
@DefaultHeaders({
  //'Accept': 'application/json',
 // 'Content-Type': 'application/json'
})
export class ApiService extends RESTClient {

  constructor(http: Http) {
    super(http);
  }

  @POST("/todo")
  public postTodo( @Body todo): Observable<any> { return null; };
}
