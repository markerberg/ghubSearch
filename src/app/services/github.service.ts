import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class GithubService{
    private userName: string;
    private client_Id = 'b55f66c14dd50b910afb';
    private client_Secret = '137b64a761779ceb663e2dc3c2b5f7d1705aaeff';

    constructor(private _http: Http) {
        console.log('Github service ready');
        this.userName = 'markerberg';
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.userName + '?client_id=' + this.client_Id + '&client_secret=' + this.client_Secret).map(
            response => response.json());
    }

    getRepo() {
        return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id=' + this.client_Id + '&client_secret=' + this.client_Secret).map(
            response => response.json());
    }

    updateUser(userName:string){
        this.userName = userName;
    }
} 