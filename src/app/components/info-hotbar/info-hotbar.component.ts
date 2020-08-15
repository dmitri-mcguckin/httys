import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'info-hotbar',
  templateUrl: './info-hotbar.component.html',
  styleUrls: ['./info-hotbar.component.sass']
})
export class InfoHotbarComponent implements OnInit {
  total_money: number;
  total_bits: number;

  event_timer: any;

  constructor(private data_store: DataStoreService) {
    this.total_money = data_store.fetch_money();
    this.total_bits = data_store.fetch_bits();

    this.event_timer = setInterval(() => {
      this.total_money = data_store.fetch_money();
      this.total_bits = data_store.fetch_bits();
    }, 1000);
  }

  grind_bits(): void {
    this.total_bits += 1
    this.data_store.store_bits(this.total_bits);
  }

  ngOnInit(): void {}
}
