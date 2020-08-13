import { thistle } from 'color-name';
import { currencies } from './bits-currency';
import { SystemJsNgModuleLoader } from '@angular/core';
import { debuglog } from 'util';

export interface attacks {
    start_time: number;
    total: number;
    completed: number;
    attack_name: string;
    
    check_time(currency:currencies, attacking: attacks): number;
    start();
    reward();
    choose_attack(currency: currencies, attacking:attacks);
}

export class attack implements attacks{
    start_time = 0;
    total = 0;
    attack_name = null;
    completed = 0;


    constructor(start_time: number, elapsed: number, remaining: number, attack_name: string){
        this.start_time = 0;
        this.total = 0;
        this.completed = 0;
        this.attack_name = null;
  
    }

    /**Check if contract is up. Return duration so we can set percetage bar in main page.*/
    check_time(currency: currencies, attacking: attacks): number{
        let current_time = new Date().getTime();
        attacking.completed = (current_time - attacking.start_time) * 1000;   //gives us time in milliseconds. 

        if(attacking.completed >= attacking.total){   //we are done attacking. reset everything.
            currency.bits += this.reward();
            attacking.attack_name = null; //stop attacks from continuing infinetly. 
            attacking.completed = 0;
            return;
        }
        else{
            return attacking.completed;   //return the remaining amount of time.
        }
    }

    start(){
        this.start_time = new Date().getTime();
        return this.start_time;
    }

    reward(){
        let reward = Math.floor(Math.random() * 500) + 1; //genearte a random number between 1 and 100.
        return reward;
    }
    
    choose_attack(currency: currencies, attacking:attacks){
        if (attacking.attack_name == null){   //we don't have an attack selected. 
            var choice = (document.getElementById("malwares")) as HTMLSelectElement;
            //attacking.attack_name = choice.outerHTML;
            attacking.attack_name = choice.value;
            if(attacking.attack_name == "Choose an Attack"){
                return;
            }
            attacking.total = Math.floor(Math.random() * (1000000000 - 1000000)+ 1000000);  //Couldn't read from HTML so doing this instead. 
            attacking.start_time = this.start();  //get start_time from function above. 
            return;
        }
        else{   //we are still working on an attack. 
            return;
        }
    
    }

}