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
<<<<<<< HEAD
    this.apiService.postTodo({a:4543545})
      .subscribe(r => {
        console.log(r);

      });
=======
    console.log('sdcsdcsdcsd');
    this.apiService.postTodo({a:4543545}).subscribe((r) => {

    });
>>>>>>> 2a65410a45bb589442ccc2bd25463b81d2e28cef
  }

}
