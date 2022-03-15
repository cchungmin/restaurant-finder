import fetch from "isomorphic-fetch";

const foursquareAPIKey = process.env.REACT_APP_FOURSQUARE_API_KEY || "";

export const originalFetch = (urlString: string) =>
  new Promise<void>((resolve, reject) => {
    fetch(urlString, {
      headers: {
        Accept: "application/json",
        Authorization: foursquareAPIKey,
      },
    })
      .then((response: any) => response.json())
      .then((response: any) => resolve(response))
      .catch((error: any) => {
        reject(error);
      });
  });
