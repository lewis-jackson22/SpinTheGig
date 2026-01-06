// src/app/models/episode.ts
import { Artist } from './artist';
import { Venue } from './venue';
import { Beverage } from './beverage';

export interface Episode {
  number: number;
  url: string;
  ticketPrice: number;

  mainArtistId: number;
  supportingArtistId?: number;

  venueId: number;

  preGigPubId?: number;
  preGigBeverageId?: number;
  preGigBeveragePrice?: number;

  midGigBeverageId?: number;
  midGigBeveragePrice?: number;

  bogRating?: number;
  overallRating: number;

  releaseDate: string; // or Date if you want to parse ISO dates

  // Navigation properties
  mainArtist: Artist;
  supportingArtist?: Artist;

  venue: Venue;
  preGigPub?: Venue;

  preGigBeverage?: Beverage;
  midGigBeverage?: Beverage;
}
