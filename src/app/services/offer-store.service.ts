import { Injectable } from '@angular/core';
import { OfferHttpService } from './api/http/offer-http.service';
import { Offer } from '../models/offer';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferStoreService {

  private _offers: Offer[];

  public get offers(): Observable<Offer[]> {
    return this._offers ?
      of(this._offers) :
      this.offerHttpService.getAllOffers()
        .pipe(
          tap((res: Offer[]) => {
            this._offers = res;
          })
        )
      ;
  }

  constructor(private offerHttpService: OfferHttpService) {
    /*this.offerHttpService.getAllOffers().subscribe((res: Offer[]) => {
      this._offers = res;
    });*/
  }
}
