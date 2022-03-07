/* @flow */

import fetch from "isomorphic-fetch";

export const originalFetch = (urlString: string) =>
  new Promise<void>((resolve, reject) => {
    fetch(urlString)
      .then((response: any) => response.json())
      .then((response: any) => resolve(response))
      .catch((error: any) => {
        reject(error);
      });
  });
