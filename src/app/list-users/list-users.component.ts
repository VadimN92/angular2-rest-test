import { Component, OnInit } from '@angular/core';
import {Request, Response} from 'angular2/http';
import { ApiService } from '../api-service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.postTodo({a:4543545});
  }

}
