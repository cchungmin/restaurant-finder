type LabeledLatLng = {
  label: string;
  lat: number;
  lng: number;
};

export type Venue = {
  allowMenuUrlEdit: boolean;
  beenHere: { lastCheckinExpiredAt: number };
  categories: {
    formattedPhone: string;
    phone: string;
  };
  contact: {
    phone: string;
    formattedPhone: string;
  };
  hasPerk: boolean;
  hereNow: { count: number; summary: string; groups: Array<unknown> };
  id: string;
  location: {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: Array<LabeledLatLng>;
    distance: number;
    formattedAddress: Array<string>;
  };
  name: string;
  referralId: string;
  stats: { tipCount: number; usersCount: number; checkinsCount: number };
  url: string;
  venueChains: Array<unknown>;
  verified: boolean;
};
