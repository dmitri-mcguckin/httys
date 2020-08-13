import { Component, OnInit, Directive } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { $ } from 'protractor';

interface Skill {
  name: string;
  description: string;
  bitCost: number;
  moneyCost: number;
}

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  public showTree: boolean = false;
  skillInfo: Record<string, Skill> = {
    'infection-1': {
      name: 'Bit Boost',
      description: '+25% bits',
      bitCost: 5000,
      moneyCost: 0,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  // From: https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm
  toggleDisplay() {
    this.showTree = !this.showTree;
    if (this.showTree) {
      document.querySelector('#skill-tree-btn').innerHTML = 'Hide';
    } else {
      document.querySelector('#skill-tree-btn').innerHTML = 'Skill Tree';
    }
  }

  buySkill(event) {
    let skillId = event.target.id;
    alert(document.getElementById('currency').innerHTML);
    // this.skillInfo[skillId].name;
    // this.skillInfo[skillId].description;
    // this.skillInfo[skillId].bitCost;
    // this.skillInfo[skillId].moneyCost;
  }
}
