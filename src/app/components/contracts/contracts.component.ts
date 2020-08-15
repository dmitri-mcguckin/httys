import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Contract {
  provider: string;
  target: string;
  created_on: Date;
  expires_on: Date;
}

@Component({
  selector: 'contracts-pane',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.sass']
})

export class ContractsComponent implements OnInit {
  tick_time: number = 1000;
  event_timer: any;

  contract_form: FormGroup;

  available_contracts: Array<Contract>;
  show_contracts: boolean = false;

  constructor(private data_store: DataStoreService) {
    this.contract_form = new FormGroup({
      accepted: new FormControl(null, Validators.required)
    });

    this.event_timer = setInterval(() => {
      this.cycle();
    }, this.tick_time);
  }
  ngOnInit(): void {}

  toggle_contracts(): void {
    this.show_contracts = !this.show_contracts;
  }

  cycle(): void {
    console.log('A cycle!');
  }
}
