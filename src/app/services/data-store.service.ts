import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class DataStoreService {
  constructor(private cookie_service: CookieService) {
    this.cookie_service.set('global_bits', '0');
    this.cookie_service.set('global_money', '0');
    this.cookie_service.set('attack_percentage', '0');
  }

  store_bits(bits: number): void {
    this.cookie_service.set('global_bits', bits.toString());
  }

  fetch_bits(): number {
    const global_bits = this.cookie_service.get('global_bits');
    if(global_bits === '') {
      return 0;
    }
    else {
      return parseInt(global_bits);
    }
  }

  store_attack_percentage(percentage: number): void{
    this.cookie_service.set('attack_percentage', percentage.toString());
  }

  store_money(money: number) {
    this.cookie_service.set('global_money', money.toString());
  }

  fetch_money(): number {
    const global_money = this.cookie_service.get('global_money');
    if(global_money === '') {
      return 0;
    }
    else {
      return parseInt(global_money);
    }
  }

  fetch_percentage(): number {
    const global_percengae = this.cookie_service.get('attack_percentage');
    if(global_percengae === ''){
      return 0;
    }
    else{
      return parseInt(global_percengae);
    }
  }
}
