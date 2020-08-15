import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  Skill,
  SkillMod,
} from 'src/app/components/skill-tree/skill-tree.component';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor(private cookie_service: CookieService) {
    // this.cookie_service.set('global_bits', '0', 99999);
    // this.cookie_service.set('global_money', '0', 99999);
    // this.cookie_service.set('global_detection', '0', 99999);
    // this.cookie_service.set('global_detection_max', '86400', 99999);
    // this.cookie_service.set('global_skills', '', 99999);
    // this.cookie_service.set('global_mods', '', 99999);
    // this.cookie_service.set('attack_percentage', '0', 99999);
  }

  store_bits(bits: number): void {
    this.cookie_service.set('global_bits', bits.toString(), 99999);
  }

  fetch_bits(): number {
    const global_bits = this.cookie_service.get('global_bits');
    if (global_bits === '') {
      return 0;
    } else {
      return parseInt(global_bits);
    }
  }

  store_attack_percentage(percentage: number): void {
    this.cookie_service.set('attack_percentage', percentage.toString(), 99999);
  }

  store_money(money: number) {
    this.cookie_service.set('global_money', money.toString(), 99999);
  }

  fetch_money(): number {
    const global_money = this.cookie_service.get('global_money');
    if (global_money === '') {
      return 0;
    } else {
      return parseInt(global_money);
    }
  }

  store_detection(detection: number) {
    this.cookie_service.set('global_detection', detection.toString(), 99999);
  }

  fetch_detection(): number {
    const global_detection = this.cookie_service.get('global_detection');
    if (global_detection === '') {
      return 0;
    } else {
      return parseInt(global_detection);
    }
  }

  store_detection_max(detection_max: number) {
    this.cookie_service.set(
      'global_detection_max',
      detection_max.toString(),
      99999
    );
  }

  fetch_detection_max(): number {
    const global_detection_max = this.cookie_service.get(
      'global_detection_max'
    );
    if (global_detection_max === '') {
      return 0;
    } else {
      return parseInt(global_detection_max);
    }
  }

  store_skills(skillsJSON: string) {
    this.cookie_service.set('global_skills', skillsJSON, 99999);
  }

  fetch_skills(): string {
    return this.cookie_service.get('global_skills');
  }

  store_mods(modsJSON: string) {
    this.cookie_service.set('global_mods', modsJSON, 99999);
  }

  fetch_mods(): string {
    return this.cookie_service.get('global_mods');
  }
  fetch_percentage(): number {
    const global_percengae = this.cookie_service.get('attack_percentage');
    if (global_percengae === '') {
      return 0;
    } else {
      return parseInt(global_percengae);
    }
  }
}
