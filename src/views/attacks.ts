import { thistle } from 'color-name';
import { currencies } from './bits-currency';
import { SystemJsNgModuleLoader } from '@angular/core';
import { debuglog } from 'util';

export interface attacks {
    start_time: number;
    total: number;
    completed: number;
    attack_name: string;
    attack_info: string;
    
    check_time(currency:currencies, attacking: attacks): number;
    start();
    reward();
    choose_attack(currency: currencies, attacking:attacks);
    random_info(attacking:attacks);
}

export class attack implements attacks{
    start_time = 0;
    total = 0;
    attack_name = null;
    completed = 0;
    attack_info = null;


    constructor(start_time: number, elapsed: number, remaining: number, attack_name: string, attack_info: string){
        this.start_time = 0;
        this.total = 0;
        this.completed = 0;
        this.attack_name = null;
        this.attack_info = null;
  
    }

    /**Check if contract is up. Return duration so we can set percetage bar in main page.*/
    check_time(currency: currencies, attacking: attacks): number{
        let current_time = new Date().getTime();
        attacking.completed = (current_time - attacking.start_time) * 1000;   //gives us time in milliseconds. 

        if(attacking.completed > attacking.total){   //we are done attacking. reset everything.
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
                attacking.attack_name = null;
                return;
            }
            attacking.total = Math.floor(Math.random() * (1000000000 - 1000000)+ 1000000);  //Couldn't read from HTML so doing this instead. 
            attacking.start_time = this.start();  //get start_time from function above. 
            this.random_info(attacking);    //get random attack info.
            return;
        }
        else{   //we are still working on an attack. 
            this.check_time(currency, attacking);
            return;
        }
    
    }
    /**Give random attack info per attack. */
    random_info(attacking:attacks){
        enum info{
            "Over 70% of US Americans are worried about having their personal data stolen from their computers and online networks." = 1,
            "January 2019 saw the release of nearly two billion hacked records 1,769,185,063 to be precise." = 2,
            "As much as 38% of malware is now being disguised as a Word document." = 3,
            "In 2018, the cost of the average data breach increased by 6.4% to $3.86 million dollars per breach." = 4,
            "In 2020, it is estimated that organizations and individuals collectively will pay $11.5 billion, either as a cost of remediating ransomware damage or simply as a cost or paying a ransom." = 5, 
            "Since 2015, the ecenomic toll of cybercrime has grown fourfold to $2 trillion USD." = 6, 
            "Cryptojacking malware steals your CPU cycles to mine cryptocurrency, and it's some of the fastest growing malware out there, with 8 million attempts per month at the beginning of 2018." = 7, 
            "About 24,000 malicious apps are blocked every day - a volume that virutally guarantees at least a few malicious apps are getting through." = 8, 
            "A survey of over 4,000 organizations shows that over 70% are unprepared to face down even the most basic attempt at a security breach." = 9, 
        }
        //source: https://www.safetydetectives.com/blog/malware-statistics/
        let random = Math.floor(Math.random() * (9 - 1) + 1);

        attacking.attack_info = info[random];
        return;
    }

}