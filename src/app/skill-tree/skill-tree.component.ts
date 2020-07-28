import { Component, OnInit } from '@angular/core';
import { BuiltinType } from '@angular/compiler';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // From: https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm
  toggleDisplay() {
    this.show = !this.show;
    if (this.show) {
      document.querySelector('#skill-tree-btn').innerHTML = 'Hide';
    } else {
      document.querySelector('#skill-tree-btn').innerHTML = 'Skill Tree';
    }
  }
}
