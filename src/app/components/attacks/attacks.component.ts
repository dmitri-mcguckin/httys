import { Component, OnInit } from '@angular/core';
import { attacks } from 'src/assets/attacks';
import { tooltips } from 'src/assets/tooltips';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStoreService } from 'src/app/services/data-store.service';

// number = 0;
// let currency:currencies = new currencies(0, null, 0);
// let attacking:attacks = new attack(null, null, null, null, null);
//
// mainLoop();
//
//
// function mainLoop(){
//   currency.bits = updateGUI(currency, attacking);    //call updateGUI function.
// }
//
// function updateGUI(currency: currencies, attacking: attacks): number {
//   document.getElementById("currency").textContent = "You have " + currency.bits + " bits";
//   currency.bits = currency.generate_currency(currency.bits);
//   //attacking.attack_name = attacking.choose_attack(currency, attacking);
//   //attacking.remaining = attacking.check_time(currency, attacking);
//   attacking.choose_attack(currency, attacking);
//   if (attacking.completed == 0){
//     document.getElementById("Attack Percentage").textContent = "Attack Percentage:  ";
//   }else if (attacking.attack_name == "Choose an Attack"){
//     document.getElementById("Attack Percentage").textContent = "Attack Percentage:  ";
//   }else{
//     //attacking.check_time(currency, attacking);
//     document.getElementById("Attack Percentage").textContent = "Attack Percentage: " + Math.floor((attacking.completed/attacking.total)*100) + "%";
//     document.getElementById("Attack Completed").textContent = "Attack Completed: " + attacking.completed;
//     document.getElementById("Attack Total").textContent = "Attack Total: " + attacking.total;
//     document.getElementById("Attack Name").textContent = "Attack Name: " + attacking.attack_name;
//     document.getElementById("Malware Info").textContent = "Malware Info: " + attacking.attack_info;
//   }
//
//   return currency.bits;
// }
//
// setInterval(mainLoop, 300) //update every 200 miliseconds.
// updateGUI(currency, attacking);    //call updateGUI function.

interface Attack {
  name: string;
  description: string;
  percentage: number;
  start_time: Date;
  end_time: Date;
}

interface Contract {
  provider: string;
  target: string;
  created_on: Date;
  expires_on: Date;
}

@Component({
  selector: 'attack-pane',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.sass']
})

export class AttackPane implements OnInit {
  event_timer: any;
  tick_time: number = 1000;

  attack_select_form: FormGroup;
  contract_form: FormGroup;

  available_contracts: Array<Contract>;
  show_contracts: boolean = false;

  attack_options: Array<string>;
  current_attack: Attack = null;
  show_attacks: boolean = false;
  attack_active: boolean = false;

  constructor(private data_store: DataStoreService) {
    this.attack_options = Object.keys(attacks);

    this.attack_select_form = new FormGroup({
      attack: new FormControl(0, Validators.required)
    });

    this.contract_form = new FormGroup({
      accepted: new FormControl(null, Validators.required)
    });

    this.event_timer = setInterval(() => {
      console.log(new Date());
    }, this.tick_time);
  }

  toggle_contracts(): void {
    this.show_contracts = !this.show_contracts;
  }

  toggle_attacks(): void {
    this.show_attacks = !this.show_attacks;
  }

  initiate_attack(): void {
    const selection = this.attack_select_form.get('attack').value;
    console.log(`Starting ${selection}...`);
    this.current_attack = {
      name: selection,
      description: this.genearte_random_tooltip(),
      percentage: 0,
      start_time: new Date(),
      end_time: null
    }

    this.attack_active = true;
  }

  cycle(): void {
    
  }

  /**Check if contract is up. Return duration so we can set percetage bar in main page.*/
  // check_time(currency: currencies, attacking: attacks): number {
  //     let current_time = new Date().getTime();
  //     attacking.completed = (current_time - attacking.start_time) * 1000;   //gives us time in milliseconds.
  //
  //     if(attacking.completed > attacking.total){   //we are done attacking. reset everything.
  //         currency.bits += this.reward();
  //         attacking.attack_name = null; //stop attacks from continuing infinetly.
  //         attacking.completed = 0;
  //         return;
  //     }
  //     else{
  //         return attacking.completed;   //return the remaining amount of time.
  //     }
  // }

  reward(){
      let reward = Math.floor(Math.random() * 500) + 1; //genearte a random number between 1 and 100.
      return reward;
  }


  /**Give random attack info per attack. */
  genearte_random_tooltip(): string {
      //source: https://www.safetydetectives.com/blog/malware-statistics/
      const index = Math.floor(Math.random() * (9 - 1) + 1);
      return tooltips[index];
  }

  ngOnInit(): void {}
}