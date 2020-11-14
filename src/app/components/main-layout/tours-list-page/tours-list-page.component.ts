import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../models/offer';
import { OfferStoreService } from '../../../services/offer-store.service';

@Component({
  selector: 'app-tours-list-page',
  templateUrl: './tours-list-page.component.html',
  styleUrls: ['./tours-list-page.component.scss']
})
export class ToursListPageComponent implements OnInit {

  offers: Offer[];

  constructor(private offerStoreService: OfferStoreService) { }

  ngOnInit(): void {
    this.offerStoreService.offers.subscribe(res => {
      this.offers = res;
      console.log(this.offers);
    });
    console.log(this.offers);
  }

}
