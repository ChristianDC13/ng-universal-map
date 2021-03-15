import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/marker.interface';
import { BusinessService, Card } from 'src/app/services/business.service';
import { BridgeService } from '../services/bridge.service';
import { loadavg } from 'os';
@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrls: ['./location-cards.component.scss'],
})
export class LocationCardsComponent implements OnInit {
  cards: Card[] = [];
  marker: Marker[];
  constructor(private businessService: BusinessService, private bridgeService: BridgeService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.cards = await this.businessService.getBusinessCard();
  }

  cardSelected(card: Card): void {
    this.bridgeService.cardSelected.next(card.id);
  }
}
