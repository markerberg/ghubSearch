import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-user',
  templateUrl: `searchuser.component.html`,
})
export class SearchUserComponent  {
    username: string;
    constructor() {
    }

    @Input() user: any;
    @Output() onSub: EventEmitter<any> = new EventEmitter<any>();

    searchUser(e: any){
        let sendInfo: any = e.target.value;
        this.onSub.emit(sendInfo);
    }


 }
