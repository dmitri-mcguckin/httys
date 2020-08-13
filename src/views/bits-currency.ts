export interface BitsCurrency {
    bits?: number;
    information?: string;
    money?: number;

    generate_currency(currency: number, random: number, reward: number): number;
}

export class currencies implements BitsCurrency{
    bits: number;
    information: string;
    money: number;

    /**simple constructor to set everything to null or 0. */
    constructor(bits: number, information: string, money: number){
        this.bits = 0;
        this.information = null;
        this.money = 0;
    }
   
    /** Generate currency with some randomness based on the parameter random set to 10 by default.
    * Then return the updated curreny back to "main.ts". 
    */
    generate_currency(currency: number, random: number = 6, reward: number = 3): number {
        currency += Math.floor(Math.random() * random) + 1;  //genarate random number between 1 and random.
        return currency;
    }
  

    






}
