import { Component, OnInit } from '@angular/core';
import { OfferStoreService } from '../../../services/offer-store.service';
import { Offer } from '../../../models/offer';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss']
})
export class TourPageComponent implements OnInit {

  constructor(private offerStoreService: OfferStoreService) { }

  ngOnInit(): void {
  }

}
