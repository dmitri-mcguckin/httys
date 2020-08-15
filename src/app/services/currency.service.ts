import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  bits: number = 0;
  information: string = null;
  money: number = 0;

  constructor() {}

  /** Generate currency with some randomness based on the parameter random set to 10 by default.
   * Then return the updated curreny back to "main.ts".
   */
  generate_currency(
    currency: number,
    random: number = 3,
    reward: number = 3
  ): number {
    currency += Math.floor(Math.random() * random) + 1; //genarate random number between 1 and random.
    return currency;
  }
}
