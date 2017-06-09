import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repos/repo.component';
import { SearchUserComponent } from './components/search-user/searchuser.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,
                  ProfileComponent, 
                  UserComponent,
                  RepoComponent,
                  SearchUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
