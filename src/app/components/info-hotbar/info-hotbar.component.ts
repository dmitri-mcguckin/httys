import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'info-hotbar',
  templateUrl: './info-hotbar.component.html',
  styleUrls: ['./info-hotbar.component.sass'],
})
export class InfoHotbarComponent implements OnInit {
  total_money: number;
  total_bits: number;
  total_detection: number;
  total_detection_max: number;
  total_detection_percentage: string;

  event_timer: any;

  constructor(private data_store: DataStoreService) {
    this.total_money = data_store.fetch_money();
    this.total_bits = data_store.fetch_bits();
    this.total_detection = data_store.fetch_detection();
    this.total_detection_max = data_store.fetch_detection_max();
    this.total_detection_percentage = (
      (this.total_detection / this.total_detection_max) *
      100
    ).toFixed(1);

    this.event_timer = setInterval(() => {
      this.total_money = data_store.fetch_money();
      this.total_bits = data_store.fetch_bits();
      this.total_detection = data_store.fetch_detection();
      this.total_detection_max = data_store.fetch_detection_max();
      this.total_detection_percentage = (
        (this.total_detection / this.total_detection_max) *
        100
      ).toFixed(1);
    }, 1000);
  }

  grind_bits(): void {
    this.total_bits += 1;
    this.data_store.store_bits(this.total_bits);
  }

  // grind_money(): void {
  //   this.total_money += 1;
  //   this.data_store.store_money(this.total_money);
  // }

  // grind_detection(): void {
  //   this.total_detection += 1;
  //   this.data_store.store_detection(this.total_detection);
  // }

  ngOnInit(): void {}
}
