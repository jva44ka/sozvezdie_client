import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../models/offer';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {

  @Input() tour: Offer;

  get thumbnail(): string {
    return this.tour.photoCard?.thumbnail ? this.tour.photoCard.thumbnail : 'assets/image-not-found.jpg';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
