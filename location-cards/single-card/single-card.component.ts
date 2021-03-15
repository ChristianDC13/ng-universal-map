import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() cards: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
