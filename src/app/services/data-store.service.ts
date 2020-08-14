import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class DataStoreService {
  constructor(private cookie_service: CookieService) {}

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
}