import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { currencies } from './views/bits-currency';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//var currency: number = 0;
let currency:currencies = new currencies(0, null, 0);
var lastUpdate = Date.now();
mainLoop();


function mainLoop(){
  var diff = (Date.now() - lastUpdate) / 1000;

  lastUpdate = Date.now();
  currency.bits = updateGUI(currency);    //call updateGUI function.
}

function updateGUI(currency: currencies): number {
  currency.bits = currency.generate_currency(currency.bits);
  document.getElementById("currency").textContent = "You have " + currency.bits + " bits";
  return currency.bits;
}

setInterval(mainLoop, 100) //update every 50 miliseconds. 
updateGUI(currency);    //call updateGUI function.

