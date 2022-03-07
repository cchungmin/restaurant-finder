import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { actionResetPickedVenue, actionResetVenues } from "../store";

export const useResetVenues = () => {
  const dispatch = useDispatch();

  return {
    resetVenues: useCallback(() => {
      dispatch(actionResetVenues());
    }, [dispatch]),
    resetPickedVenue: useCallback(() => {
      dispatch(actionResetPickedVenue());
    }, [dispatch]),
  };
};
