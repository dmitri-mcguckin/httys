// ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataStoreService } from 'src/app/services/data-store.service';

enum EffectType {
  TODO = 'TODO',
  lump = 'lump', // lump sum, such as +5000 bits
  add = 'add', // additive, such as +50 bits per second
  mult = 'mult', // multiplicative, such as 25% more bits from all sources = 1.25x
  exp = 'exp', // exponential, such as gain 2% of your total bits every second
}

export interface Skill {
  name: string;
  desc: string;
  cost: number; // cost in terms of skil points
  purchased: boolean; // whether the user has purchased the skill or not
  effect: EffectType; // the type of effect: lump sum, additive, multiplicative, exponential
  modifier: number; // the modifier for the skill's effect (e.g. 25% = 1.25)
  tree: number; // "infection", "wealth", or "stealth"
}

export interface SkillMod {
  addMod: number; // additive, such as +50 bits per second
  multMod: number; // multiplicative, such as 25% more bits from all sources = 1.25x
  expMod: number; // exponential, such as gain 2% of your total bits every second
}

// interface PathMod {
//   infection: SkillMod;
//   wealth: SkillMod;
//   stealth: SkillMod;
// }

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
  // pathMod: PathMod = {
  // };

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

  pathMods: SkillMod[] = [this.infectionMod, this.wealthMod, this.stealthMod];

  // a Record of all skills in the skill tree
  allSkills: Record<string, Skill> = {
    'infection-1': {
      name: 'Bit Accumulator',
      desc: '+50 bits per second',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 50,
      tree: 0,
    },
    'infection-2': {
      name: 'Bit Bundle',
      desc: '+20,000 bits (one-time)',
      cost: 1,
      purchased: false,
      effect: EffectType.lump,
      modifier: 20000,
      tree: 0,
    },
    'infection-3': {
      name: 'Bit Miner',
      desc: '+150 bits per second',
      cost: 2,
      purchased: false,
      effect: EffectType.add,
      modifier: 150,
      tree: 0,
    },
    'infection-4': {
      name: 'Bit Bonanza',
      desc: '+75,000 bits (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 75000,
      tree: 0,
    },
    'infection-5': {
      name: 'Bit Frenzy',
      desc: '+100% bit gain',
      cost: 3,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 0,
    },
    'infection-6': {
      name: 'Bit Emperor',
      desc: '+5% of your total bits per second',
      cost: 5,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.05,
      tree: 0,
    },
    'wealth-1': {
      name: 'Coin Collector',
      desc: '+$5 per sec',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 5,
      tree: 1,
    },
    'wealth-2': {
      name: 'Piggy Bank',
      desc: '+1% of your total dollars per second',
      cost: 1,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.01,
      tree: 1,
    },
    'wealth-3': {
      name: 'Personal Loan',
      desc: '+$18,000 (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: 18000,
      tree: 1,
    },
    'wealth-4': {
      name: 'Pure Profit',
      desc: '+100% dollar gain',
      cost: 2,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 1,
    },
    'wealth-5': {
      name: 'Benjamins',
      desc: '+$100 per second',
      cost: 3,
      purchased: false,
      effect: EffectType.add,
      modifier: 100,
      tree: 1,
    },
    'wealth-6': {
      name: 'Venture Capitalist',
      desc: '+8% of your total dollars per second',
      cost: 5,
      purchased: false,
      effect: EffectType.exp,
      modifier: 0.08,
      tree: 1,
    },
    'stealth-1': {
      name: 'Cloak',
      desc: '-25% detection',
      cost: 1,
      purchased: false,
      effect: EffectType.mult,
      modifier: 0.25,
      tree: 2,
    },
    'stealth-2': {
      name: 'Shroud',
      desc: '+6 hours to detection buffer (permanently)',
      cost: 1,
      purchased: false,
      effect: EffectType.add,
      modifier: 0,
      tree: 2,
    },
    'stealth-3': {
      name: 'Disappear',
      desc: 'Reset detection level to 0 (one-time)',
      cost: 2,
      purchased: false,
      effect: EffectType.lump,
      modifier: -9999,
      tree: 2,
    },
    'stealth-4': {
      name: 'Cover Your Tracks',
      desc: '+12 hours to detection buffer (permanently)',
      cost: 2,
      purchased: false,
      effect: EffectType.add,
      modifier: 12,
      tree: 2,
    },
    'stealth-5': {
      name: 'Watchdog',
      desc: '+24 hours to detection buffer (permanently)',
      cost: 3,
      purchased: false,
      effect: EffectType.add,
      modifier: 24,
      tree: 2,
    },
    'stealth-6': {
      name: 'Ghost',
      desc: '-100% detection',
      cost: 5,
      purchased: false,
      effect: EffectType.mult,
      modifier: 1,
      tree: 2,
    },
  };

  //
  constructor(
    private modalService: NgbModal,
    private data_store: DataStoreService
  ) {
    if (data_store.fetch_skills() != '') {
      this.allSkills = JSON.parse(data_store.fetch_skills());
    }
    if (data_store.fetch_mods() != '') {
      this.pathMods = JSON.parse(data_store.fetch_mods());
    }
  }

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
    if (skill.effect === 'add') {
      this.pathMods[skill.tree].addMod += skill.modifier;
    } else if (skill.effect === 'mult') {
      this.pathMods[skill.tree].multMod += skill.modifier;
    } else {
      this.pathMods[skill.tree].expMod += skill.modifier;
    }

    this.data_store.store_mods(JSON.stringify(this.pathMods));
  }

  // payout lump sum skill effect (such as 'gain 20,000 bits (one-time)')
  setLumpSum(skill) {
    if (skill.tree === 0) {
      // infection
      this.data_store.store_bits(this.data_store.fetch_bits() + skill.modifier);
    } else if (skill.tree === 1) {
      // wealth
      this.data_store.store_money(
        this.data_store.fetch_money() + skill.modifier
      );
    } else {
      // stealth
      this.data_store.store_detection(
        this.data_store.fetch_detection() + skill.modifier
      );
    }
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
    if (this.allSkills[this.skillId].effect != 'lump') {
      this.setModifiers(this.allSkills[this.skillId]);
    } else {
      this.setLumpSum(this.allSkills[this.skillId]);
    }

    this.data_store.store_skills(JSON.stringify(this.allSkills));
  }

  resetMods() {
    this.pathMods[0] = this.infectionMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };
    this.pathMods[1] = this.wealthMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };
    this.pathMods[2] = this.stealthMod = {
      addMod: 0,
      multMod: 1,
      expMod: 1,
    };

    this.data_store.store_mods(JSON.stringify(this.pathMods));
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
    this.data_store.store_skills(JSON.stringify(this.allSkills));
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
