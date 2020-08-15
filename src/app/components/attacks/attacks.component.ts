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
  end_time: number;
}

@Component({
  selector: 'attack-pane',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.sass'],
})
export class AttackPane implements OnInit {
  event_timer: any;
  tick_time: number = 100;

  attack_select_form: FormGroup;

  attack_options: Array<string>;
  current_attack: Attack = null;
  show_attacks: boolean = false;
  attack_active: boolean = false;

  constructor(private data_store: DataStoreService) {
    this.attack_options = Object.keys(attacks);

    this.attack_select_form = new FormGroup({
      attack: new FormControl(0, Validators.required),
    });

    this.event_timer = setInterval(() => {
      data_store.store_bits(data_store.fetch_bits() + 1);
      //data_store.store_attack_percentage(data_store.fetch_percentage();
      if (this.current_attack != null) {
        this.attack_percentage();
      }
    }, this.tick_time);
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
      end_time: this.get_final_time(),
    };

    this.attack_active = true;
  }

  attack_percentage(): void {
    let current = new Date().getTime(); //get current time in seconds.

    if (this.current_attack.percentage < 100) {
      let completed = current - this.current_attack.start_time.getTime(); //get time since start time.
      this.current_attack.percentage = Math.floor(
        completed / 1000 / this.current_attack.end_time
      ); //compare start time against end time.
      this.data_store.store_attack_percentage(
        this.data_store.fetch_percentage()
      );

      if (this.current_attack.percentage >= 100) {
        this.data_store.store_bits(
          this.data_store.fetch_bits() + this.reward()
        );
        this.current_attack.percentage == 0;
        this.current_attack == null;
        this.attack_active = false;
      }
    }
  }

  cycle(): void {}

  get_final_time(): number {
    let random = Math.floor(Math.random() * 500) + 1000;
    let time = new Date(random); //conert milliseconds to seconds.
    return time.getTime() / 1000; //convert milliseconds to seconds.
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

  reward() {
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
