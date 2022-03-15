import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurantPhotos } from "../store";

export const useGetRestaurantPhotos = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    try {
      dispatch(fetchRestaurantPhotos({ id }));
    } catch (e) {}
  }, [dispatch, id]);
};
