import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'repo',
  templateUrl: `repo.component.html`,
})
export class RepoComponent  {
    constructor() {
    }

    @Input() repo: any;

 }
