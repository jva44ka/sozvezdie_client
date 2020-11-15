import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../configuration.service';
import { Observable } from 'rxjs';
import { Offer } from '../../../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferHttpService extends BaseHttpService {

  private readonly nameOfController: string = 'offer';

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  getAllOffers(searchLine: string = ''): Observable<Offer[]> {
    let params: string = '';
    if (searchLine)
      params += `?searchLine=${searchLine}`;
    return this.getResource<Offer[]>(this.nameOfController + params);
  }

  getOfferById(id: number): Observable<Offer> {
    return this.getResource<Offer>(`${this.nameOfController}/${id}`);
  }
}
