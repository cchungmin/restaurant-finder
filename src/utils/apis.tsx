import QueryString from "query-string";
import { originalFetch } from "./request";

import type { Venue } from "../store";

const foursquareAPI = process.env.REACT_APP_FOURSQUARE_API;
const foursquareAPIClientId = process.env.REACT_APP_FOURSQUARE_API_CLIENT_ID;
const foursquareAPIClientSecret =
  process.env.REACT_APP_FOURSQUARE_API_CLIENT_SECRET;

export const CREDENTIALS = {
  v: "20171001",
  client_id: foursquareAPIClientId,
  client_secret: foursquareAPIClientSecret,
};

export const params = {
  ll: "35.6646782,139.7378198",
  radius: 1000,
  categoryId: "4d4b7105d754a06374d81259",
  query: "",
};

export const urlConfig = {
  apiUrl: foursquareAPI,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=",
  locale: "en",
};

export const searchRestaurants = async ({ query }: { query?: string }) => {
  const newParams = { ...params, query };
  const urlString = `${urlConfig.apiUrl}/places/search?${QueryString.stringify(
    newParams
  )}`;
  return await originalFetch(urlString);
};

export const getRestaurantDetail = async ({ id }: Venue) => {
  if (!id) return;
  const urlString = `${urlConfig.apiUrl}/places/${id}`;
  return await originalFetch(urlString);
};

export const getRestaurantPhotos = async ({ id }: Venue) => {
  if (!id) return;
  const urlString = `${urlConfig.apiUrl}/places/${id}/photos`;
  return await originalFetch(urlString);
};
