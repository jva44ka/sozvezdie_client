import {PhotoCard} from './photo-card';

export class Offer {
  public id: number;
  public title: string;
  public header: string;
  public description: string;
  public route: string[];
  public periodStart: Date;
  public periodEnd: Date;
  public minPrice: number;
  public photoCard: PhotoCard;
  public photoAlbum: PhotoCard[];
}
