import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { UserModel } from '../models/user.model';
import { GET_USERS } from '../services/user.graphQL';
import { Response } from '../models/responseUser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Observable<UserModel[]> | undefined;
  
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.users = this.apollo.watchQuery<Response>({
      query:GET_USERS,
    }).valueChanges.pipe(
      map((result)=>result.data.getUsers)
    );
    console.log(this.users);
  }
}
