import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchVenues } from "../store";

export const useSearchRestaurants = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ query }: { query?: string }) => {
      try {
        dispatch(fetchVenues({ query }));
      } catch (e) {}
    },
    [dispatch]
  );
};
