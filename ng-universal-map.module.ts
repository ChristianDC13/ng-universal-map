import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SingleCardComponent } from './location-cards/single-card/single-card.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MarkerComponent } from './marker/marker.component';

@NgModule({
  declarations: [
    MapComponent,
    SingleCardComponent,
    ShortenPipe,
    MarkerComponent
  ],
  imports: [CommonModule],
  exports: [MapComponent, MarkerComponent],
})
export class NgUniversalMap {}
