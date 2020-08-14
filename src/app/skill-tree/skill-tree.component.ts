// ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum EffectType {
  TODO = 'TODO',
  lump = 'lump', // lump sum, such as +5000 bits
  add = 'add', // additive, such as +50 bits per second
  mult = 'mult', // multiplicative, such as 25% more bits from all sources = 1.25x
  compound = 'compound', // compound (exponential), such as gain 2% of your total bits every second
}

interface Skill {
  name: string;
  desc: string;
  cost: number; // cost in terms of skil points
  purchased: boolean; // whether the user has purchased the skill or not
  effect: EffectType; // the type of effect: lump sum, additive, multiplicative, compound (exponential)
  modifier: number; // the modifier for the skill's effect (e.g. 25% = 1.25)
}

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  skillPoints: number = 2; // user's number of skill points
  skillId: string; // HTML id of a skill
  canPurchase: boolean = false; // if user's # skill points >= skill cost, canPurchase = true
  showTree: boolean = false; // toggle displaying the skill tree
  allSkills: Record<string, Skill> = {
    // record of all skills in the skill tree
    'infection-1': {
      name: 'Bit Accumulator',
      desc: '+50 bits per second',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 50,
    },
    'infection-2': {
      name: 'Bit Bundle',
      desc: '+20,000 bits (one-time)',
      cost: 1,
      purchased: false,
      effect: EffectType.lump,
      modifier: 20000,
    },
    'infection-3': {
      name: 'Bit Miner',
      desc: '+150 bits per second',
      cost: 2,
      purchased: false,
      effect: EffectType.add,
      modifier: 150,
    },
    'infection-4': {
      name: 'Bit Bonanza',
      desc: '+75,000 bits (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 75000,
    },
    'infection-5': {
      name: 'Bit Frenzy',
      desc: '+100% bit gain',
      cost: 3,
      purchased: false,
      effect: EffectType.mult,
      modifier: 2,
    },
    'infection-6': {
      name: 'Bit Emperor',
      desc: '+5% of your total bits per second',
      cost: 5,
      purchased: false,
      effect: EffectType.compound,
      modifier: 0.05,
    },
    'wealth-1': {
      name: 'Coin Collector',
      desc: '+$5 per sec',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 5,
    },
    'wealth-2': {
      name: 'Piggy Bank',
      desc: '+1% of your total dollars per second',
      cost: 1,
      purchased: false,
      effect: EffectType.compound,
      modifier: 0.01,
    },
    'wealth-3': {
      name: 'Personal Loan',
      desc: '+$18,000 (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 18000,
    },
    'wealth-4': {
      name: 'Pure Profit',
      desc: '+100% dollar gain',
      cost: 2,
      purchased: false,
      effect: EffectType.mult,
      modifier: 2,
    },
    'wealth-5': {
      name: 'Benjamins',
      desc: '+$100 per second',
      cost: 3,
      purchased: false,
      effect: EffectType.add,
      modifier: 100,
    },
    'wealth-6': {
      name: 'Venture Capitalist',
      desc: '+8% of your total dollars per second',
      cost: 5,
      purchased: false,
      effect: EffectType.compound,
      modifier: 0.08,
    },
    'stealth-1': {
      name: 'Shifty',
      desc: '-0.25 detection per second',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: -0.25,
    },
    'stealth-2': {
      name: '',
      desc: 'TODO',
      cost: 1,
      purchased: false,
      effect: EffectType.TODO,
      modifier: 0,
    },
    'stealth-3': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
      effect: EffectType.TODO,
      modifier: 0,
    },
    'stealth-4': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
      effect: EffectType.TODO,
      modifier: 0,
    },
    'stealth-5': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
      effect: EffectType.TODO,
      modifier: 0,
    },
    'stealth-6': {
      name: 'TODO',
      desc: 'TODO',
      cost: 1,
      purchased: false,
      effect: EffectType.TODO,
      modifier: 0,
    },
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.setTooltips();
  }

  // go through all skills (grid items) and set their tooltip (title) to be their description
  setTooltips() {
    let skills = document.getElementsByClassName('skill');
    for (var i = 0; i < skills.length; i++) {
      skills[i].setAttribute(
        'title',
        this.allSkills[skills[i].id].name +
          `: ` +
          this.allSkills[skills[i].id].desc
      );
    }
  }

  setModifiers(skill) {
    // lump sum: N/A
    // add: accumulate additive modifier
    // mult: accumulate multiplicative modifier
    // compound: accumulate compound modifier
  }

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
    } else if (this.skillId.search('wealth') > -1) {
      currSkill.style.backgroundColor = 'green';
    } else {
      currSkill.style.backgroundColor = 'blue';
    }
    this.modalService.dismissAll();
    this.setModifiers(this.allSkills[this.skillId]);
  }

  resetSkills() {
    let refundedPoints = 0;

    for (let key in this.allSkills) {
      let currSkill = this.allSkills[key];
      if (currSkill.purchased === true) {
        currSkill.purchased = false;
        refundedPoints += currSkill.cost;
        document.getElementById(key).style.backgroundColor = 'transparent';
      }
    }

    this.skillPoints += refundedPoints;
    document.getElementById(
      'skill-points'
    ).innerText = this.skillPoints.toString();
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
