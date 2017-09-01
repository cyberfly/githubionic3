import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[]  

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsersProvider) {
    githubUsers.load().subscribe(users => {
      console.log(users)
      this.users = users
      console.log(this.users)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
