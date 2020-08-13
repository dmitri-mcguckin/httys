// ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { $ } from 'protractor';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

interface Skill {
  name: string;
  desc: string;
  cost: number;
}

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  public skillPoints: number = 0;
  public showTree: boolean = false;
  skillInfo: Record<string, Skill> = {
    'infection-1': {
      name: 'Bit Boost',
      desc: '+25% passive bit gain',
      cost: 1,
    },
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // From: https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm
  toggleDisplay() {
    this.showTree = !this.showTree;
    if (this.showTree) {
      document.querySelector('#skill-tree-btn').innerHTML = 'Hide';
      document.getElementById(
        'skill-points'
      ).innerText = this.skillPoints.toString();
    } else {
      document.querySelector('#skill-tree-btn').innerHTML = 'Skill Tree';
    }
  }

  purchaseSkill() {
    alert('purchased');
  }

  // ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
  open(content, event) {
    let selectedSkill = this.skillInfo[event.target.id];
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    document.getElementById('modal-basic-title').innerText = selectedSkill.name;
    document.getElementById('skill-desc').innerText = selectedSkill.desc;
    if (selectedSkill.cost === 1) {
      document.getElementById('skill-cost').innerText =
        selectedSkill.cost.toString() + ' skill point';
    } else {
      document.getElementById('skill-cost').innerText =
        selectedSkill.cost.toString() + ' skill points';
    }
  }
}
