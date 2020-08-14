// ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum EffectType {
  TODO = 'TODO',
  lump = 'lump', // lump sum, such as +5000 bits
  add = 'add', // additive, such as +50 bits per second
  mult = 'mult', // multiplicative, such as 25% more bits from all sources = 1.25x
  exp = 'exp', // exponential, such as gain 2% of your total bits every second
}

interface Skill {
  name: string;
  desc: string;
  cost: number; // cost in terms of skil points
  purchased: boolean; // whether the user has purchased the skill or not
  effect: EffectType; // the type of effect: lump sum, additive, multiplicative, exponential
  modifier: number; // the modifier for the skill's effect (e.g. 25% = 1.25)
  tree: string; // "infection", "wealth", or "stealth"
}

interface SkillMod {
  addMod: number; // additive, such as +50 bits per second
  multMod: number; // multiplicative, such as 25% more bits from all sources = 1.25x
  expMod: number; // exponential, such as gain 2% of your total bits every second
}

interface PathMod {}

@Component({
  selector: 'skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.sass'],
})
export class SkillTreeComponent implements OnInit {
  skillPoints: number = 2; // user's number of skill points
  skillId: string; // HTML id of a skill
  canPurchase: boolean = false; // if user's # skill points >= skill cost, canPurchase = true
  showTree: boolean = false; // toggle displaying the skill tree

  // modifiers for each of the three skill trees (Infection, Wealth, and Stealth)
  infectionMod: SkillMod = {
    addMod: 0,
    multMod: 1,
    expMod: 1,
  };
  wealthMod: SkillMod = {
    addMod: 0,
    multMod: 1,
    expMod: 1,
  };
  stealthMod: SkillMod = {
    addMod: 0,
    multMod: 1,
    expMod: 1,
  };

  // a Record of all skills in the skill tree
  allSkills: Record<string, Skill> = {
    'infection-1': {
      name: 'Bit Accumulator',
      desc: '+50 bits per second',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 50,
      tree: 'infection',
    },
    'infection-2': {
      name: 'Bit Bundle',
      desc: '+20,000 bits (one-time)',
      cost: 1,
      purchased: false,
      effect: EffectType.lump,
      modifier: 20000,
      tree: 'infection',
    },
    'infection-3': {
      name: 'Bit Miner',
      desc: '+150 bits per second',
      cost: 2,
      purchased: false,
      effect: EffectType.add,
      modifier: 150,
      tree: 'infection',
    },
    'infection-4': {
      name: 'Bit Bonanza',
      desc: '+75,000 bits (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 75000,
      tree: 'infection',
    },
    'infection-5': {
      name: 'Bit Frenzy',
      desc: '+100% bit gain',
      cost: 3,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 'infection',
    },
    'infection-6': {
      name: 'Bit Emperor',
      desc: '+5% of your total bits per second',
      cost: 5,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.05,
      tree: 'infection',
    },
    'wealth-1': {
      name: 'Coin Collector',
      desc: '+$5 per sec',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 5,
      tree: 'wealth',
    },
    'wealth-2': {
      name: 'Piggy Bank',
      desc: '+1% of your total dollars per second',
      cost: 1,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.01,
      tree: 'wealth',
    },
    'wealth-3': {
      name: 'Personal Loan',
      desc: '+$18,000 (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 18000,
      tree: 'wealth',
    },
    'wealth-4': {
      name: 'Pure Profit',
      desc: '+100% dollar gain',
      cost: 2,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 'wealth',
    },
    'wealth-5': {
      name: 'Benjamins',
      desc: '+$100 per second',
      cost: 3,
      purchased: false,
      effect: EffectType.add,
      modifier: 100,
      tree: 'wealth',
    },
    'wealth-6': {
      name: 'Venture Capitalist',
      desc: '+8% of your total dollars per second',
      cost: 5,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.08,
      tree: 'wealth',
    },
    'stealth-1': {
      name: 'Cloak',
      desc: '-25% detection',
      cost: 1,
      purchased: false,
      effect: EffectType.mult,
      modifier: 0.25,
      tree: 'stealth',
    },
    'stealth-2': {
      name: 'Shroud',
      desc: '+6 hours to detection buffer (permanently)',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 0,
      tree: 'stealth',
    },
    'stealth-3': {
      name: 'Disappear',
      desc: 'Reset detection level to 0 (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: -9999,
      tree: 'stealth',
    },
    'stealth-4': {
      name: 'Cover Your Tracks',
      desc: '+12 hours to detection buffer (permanently)',
      cost: 2,
      purchased: false,
      effect: EffectType.add,
      modifier: 12,
      tree: 'stealth',
    },
    'stealth-5': {
      name: 'Watchdog',
      desc: '+24 hours to detection buffer (permanently)',
      cost: 3,
      purchased: false,
      effect: EffectType.add,
      modifier: 24,
      tree: 'stealth',
    },
    'stealth-6': {
      name: 'Ghost',
      desc: '-100% detection',
      cost: 5,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 'stealth',
    },
  };

  //
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.setTooltips();
  }

  // set each skill'1 tooltip to include name and description
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

  // set user's modifiers based upon skills known
  setModifiers(skill) {
    if (skill.tree === 'infection') {
      if (skill.effect === 'add') {
        this.infectionMod.addMod += skill.modifier;
      } else if (skill.effect === 'mult') {
        this.infectionMod.multMod += skill.modifier;
      } else {
        this.infectionMod.expMod += skill.modifier;
      }
    } else if (skill.tree === 'wealth') {
      if (skill.effect === 'add') {
        this.wealthMod.addMod += skill.modifier;
      } else if (skill.effect === 'mult') {
        this.wealthMod.multMod += skill.modifier;
      } else {
        this.wealthMod.expMod += skill.modifier;
      }
    } else {
      if (skill.effect === 'add') {
        this.stealthMod.addMod += skill.modifier;
      } else if (skill.effect === 'mult') {
        this.stealthMod.multMod += skill.modifier;
      } else {
        this.stealthMod.expMod += skill.modifier;
      }
    }
  }

  getModifiers() {
    return [this.infectionMod, this.wealthMod, this.stealthMod];
  }

  // payout lump sum skill effect (such as 'gain 20,000 bits (one-time)')
  setLumpSum(skill) {}

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
    if (this.allSkills[this.skillId].effect != 'lump') {
      this.setModifiers(this.allSkills[this.skillId]);
    } else {
      this.setLumpSum(this.allSkills[this.skillId]);
    }
  }

  resetMods() {
    this.infectionMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };
    this.wealthMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };
    this.stealthMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };
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
    this.resetMods();
  }

  // ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
  open(content, event) {
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

    if (this.skillPoints >= selectedSkill.cost && !selectedSkill.purchased) {
      this.canPurchase = true;
      document.getElementById('footer-skill-points').style.color = 'black';
    } else {
      this.canPurchase = false;
      document.getElementById('footer-skill-points').style.color = 'red';
    }
  }
}