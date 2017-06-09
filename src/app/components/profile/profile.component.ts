import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
    user: any;
    repo: any[];

    constructor(private _githubService: GithubService) {
        this.user = false;
    }

    searchUserRoot(e: any){
        this._githubService.updateUser(e);
        
        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this._githubService.getRepo().subscribe(repo => {
            console.log(repo);
            this.repo = repo;
        });
    }


 }
