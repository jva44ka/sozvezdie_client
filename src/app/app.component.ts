import { Component } from '@angular/core';
import {OfferHttpService} from './services/api/http/offer-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sozvezdie';

  constructor(private offerHttpService: OfferHttpService) {
    this.offerHttpService.getAllOffers().subscribe(
      res => console.log(res),
        err => console.error(err)
    );
  }
}
