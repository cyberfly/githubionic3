import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

@Injectable()
export class GithubUsersProvider {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

}
