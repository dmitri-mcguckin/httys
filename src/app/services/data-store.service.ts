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
    this.cookie_service.set('global_bits', '0');
    this.cookie_service.set('global_money', '0');
    this.cookie_service.set('global_detection', '0');
    this.cookie_service.set('global_detection_max', '86400');
    this.cookie_service.set('global_skills', '');
    this.cookie_service.set('global_mods', '');
  }

  store_bits(bits: number): void {
    this.cookie_service.set('global_bits', bits.toString());
  }

  fetch_bits(): number {
    const global_bits = this.cookie_service.get('global_bits');
    if (global_bits === '') {
      return 0;
    } else {
      return parseInt(global_bits);
    }
  }

  store_money(money: number) {
    this.cookie_service.set('global_money', money.toString());
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
    this.cookie_service.set('global_detection', detection.toString());
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
    this.cookie_service.set('global_detection_max', detection_max.toString());
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
    this.cookie_service.set('global_skills', skillsJSON);
  }

  fetch_skills(): string {
    return this.cookie_service.get('global_skills');
  }

  store_mods(modsJSON: string) {
    this.cookie_service.set('global_mods', modsJSON);
  }

  fetch_mods(): string {
    return this.cookie_service.get('global_mods');
  }
}
