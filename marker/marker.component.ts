import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() lat: number;
  @Input() lng: number;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
