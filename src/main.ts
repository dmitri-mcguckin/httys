import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { currencies } from './views/bits-currency';
import { attacks, attack } from './views/attacks';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//var currency: number = 0;
let currency:currencies = new currencies(0, null, 0);
let attacking:attacks = new attack(null, null, null, null);

mainLoop();


function mainLoop(){
  currency.bits = updateGUI(currency, attacking);    //call updateGUI function.
}

function updateGUI(currency: currencies, attacking: attacks): number {
  document.getElementById("currency").textContent = "You have " + currency.bits + " bits";
  //attacking.attack_name = attacking.choose_attack(currency, attacking);
  //attacking.remaining = attacking.check_time(currency, attacking);
  attacking.choose_attack(currency, attacking);
  attacking.check_time(currency, attacking);
  if (attacking.completed == 0){
    document.getElementById("Attack Percentage").textContent = "Attack Percentage:  ";
  }else if (attacking.attack_name == "Choose an Attack"){
    document.getElementById("Attack Percentage").textContent = "Attack Percentage:  ";
  }else{
    document.getElementById("Attack Percentage").textContent = "Attack Percentage: " + Math.floor((attacking.completed/attacking.total)*100) + "%";
    document.getElementById("Attack Completed").textContent = "Attack Completed: " + attacking.completed;
    document.getElementById("Attack Total").textContent = "Attack Total: " + attacking.total;
    document.getElementById("Attack Name").textContent = "Attack Name: " + attacking.attack_name;
  }

  currency.bits = currency.generate_currency(currency.bits);
  return currency.bits;
}

setInterval(mainLoop, 300) //update every 200 miliseconds. 
updateGUI(currency, attacking);    //call updateGUI function.

