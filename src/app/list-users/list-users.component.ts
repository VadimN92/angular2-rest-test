import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('sdcsdcsdcsd');
    this.apiService.postTodo({a:4543545}).subscribe((r) => {

    });
  }

}
