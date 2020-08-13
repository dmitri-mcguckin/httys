// ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Skill {
  name: string;
  desc: string;
  cost: number;
  purchased: boolean;
}

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  skillPoints: number = 2;
  skillId: string;
  canPurchase: boolean = false;
  showTree: boolean = false;
  allSkills: Record<string, Skill> = {
    'infection-1': {
      name: 'Bit Boost',
      desc: '+25% passive bit gain',
      cost: 1,
      purchased: false,
    },
    'infection-2': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
    },
    'infection-3': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
    },
    'infection-4': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
    },
    'infection-5': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
    },
    'infection-6': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
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
    this.allSkills[this.skillId].purchased = true;
    this.skillPoints -= this.allSkills[this.skillId].cost;
    document.getElementById('footer-skill-points').innerText =
      'Skill points available: ' + this.skillPoints.toString();
    document.getElementById(
      'skill-points'
    ).innerText = this.skillPoints.toString();
    let currSkill = document.getElementById(this.skillId);
    if (this.skillId.search('infect') > -1) {
      currSkill.style.backgroundColor = 'maroon';
    } else if (this.skillId.search('profit') > -1) {
      currSkill.style.backgroundColor = 'green';
    } else {
      currSkill.style.backgroundColor = 'blue';
    }
    this.modalService.dismissAll();
  }

  // ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
  open(content, event) {
    if (this.allSkills[event.target.id].purchased) {
      this.modalService.dismissAll();
    } else {
      let selectedSkill = this.allSkills[event.target.id];
      this.skillId = event.target.id;
      this.modalService.open(content, { ariaLabelledBy: 'skill-name' });
      document.getElementById('footer-skill-points').innerText =
        'Skill points available: ' + this.skillPoints.toString();
      document.getElementById('skill-name').innerText = selectedSkill.name;
      document.getElementById('skill-desc').innerText = selectedSkill.desc;
      if (selectedSkill.cost === 1) {
        document.getElementById('skill-cost').innerText =
          selectedSkill.cost.toString() + ' skill point';
      } else {
        document.getElementById('skill-cost').innerText =
          selectedSkill.cost.toString() + ' skill points';
      }

      if (this.skillPoints >= selectedSkill.cost) {
        this.canPurchase = true;
        document.getElementById('footer-skill-points').style.color = 'black';
      } else {
        this.canPurchase = false;
        document.getElementById('footer-skill-points').style.color = 'red';
      }
    }
  }
}
