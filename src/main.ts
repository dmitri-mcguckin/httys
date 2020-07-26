import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  mainLoop();

var currency: number = 0;
var lastUpdate = Date.now();
  
  
/** Generate currency with some randomness based on the parameter random set to 10 by default.
 * Then return the updated curreny back to "main.ts". 
 */
function generate_currency(currency: number, random: number = 6, reward: number = 3){
  currency += Math.floor(Math.random() * random) + 1;  //genarate random number between 1 and random.
  return currency;
}
  
function updateGUI(currency){
  currency = generate_currency(currency);
  document.getElementById("currency").textContent = "You have " + currency + " bits";
  return currency;
}
function mainLoop(){
  var diff = (Date.now() - lastUpdate) / 1000;
  
  lastUpdate = Date.now();
  currency = updateGUI(currency);    //call updateGUI function.
}
  
setInterval(mainLoop, 100) //update every 50 miliseconds. 
updateGUI(currency);    //call updateGUI function.
