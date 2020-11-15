import {Component, OnInit, ViewChild} from '@angular/core';
import { Offer } from '../../../models/offer';
import { ActivatedRoute } from '@angular/router';
import { OfferHttpService } from '../../../services/api/http/offer-http.service';
import { GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent } from 'ngx-image-gallery';
import {PhotoCard} from '../../../models/photo-card';

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

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }

}
