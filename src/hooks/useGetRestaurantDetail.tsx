import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurantDetail } from "../store";

export const useGetRestaurantDetail = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    try {
      dispatch(fetchRestaurantDetail({ id }));
    } catch (e) {}
  }, [dispatch, id]);
};
