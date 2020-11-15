import {Component, OnInit, ViewChild} from '@angular/core';
import { Offer } from '../../../models/offer';
import { ActivatedRoute } from '@angular/router';
import { OfferHttpService } from '../../../services/api/http/offer-http.service';
import { GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent } from 'ngx-image-gallery';
import { PhotoCard } from '../../../models/photo-card';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss']
})
export class TourPageComponent implements OnInit {

  offerId: number;
  offer: Offer;

  isLoading: boolean = true;

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    showDeleteControl: false,
    showImageTitle: false,
    showThumbnails: true,
    showCloseControl: false,
    thumbnailSize: 50,
    backdropColor: 'white',
    inline: true
  };

  images: GALLERY_IMAGE[] = [];

  constructor(private offerHttpService: OfferHttpService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.offerId = Number(params['id']);
      console.log('Film id is: ' + this.offerId);

      this.offerHttpService.getOfferById(this.offerId)
        .subscribe((res: Offer) => {
          this.offer = res;
          console.log(this.offer);
          this.isLoading = false;
          this.images = this.images.concat(this.offer.photoAlbum.map((phCard: PhotoCard) =>  ({
              url: phCard.photo,
              thumbnailUrl: phCard.thumbnail
            } as GALLERY_IMAGE)
          ))
        });
    });
  }
}
