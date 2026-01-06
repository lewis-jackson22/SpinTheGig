export interface Venue {
  id: number;
  name: string;
  
  nameOrNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  county: string;
  postcode: string;
}