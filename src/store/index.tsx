import {
  createSlice,
  configureStore,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { searchRestaurants, getRestaurantDetail } from "../utils";

export const fetchVenues = createAsyncThunk(
  "venues/fetchVenues",
  async ({ query }: { query?: string }) => {
    const data = await searchRestaurants({ query });
    /* @ts-ignore */
    return data.response.venues;
  }
);

export const fetchRestaurantDetail = createAsyncThunk(
  "venues/fetchRestaurantDetail",
  async ({ id }: { id: string }) => {
    /* @ts-ignore */
    const data = await getRestaurantDetail({ id });
    /* @ts-ignore */
    return data.response.venue;
  }
);

export const actionResetVenues = createAction("TYPE_RESET_VENUE");

export const actionResetPickedVenue = createAction("TYPE_RESET_PICKED_VENUE");

const venueSlice = createSlice({
  name: "venues",
  initialState: {
    venues: [],
    pickedVenue: {},
    pickedVenueMapUrl: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVenues.fulfilled, (state, action) => {
      state.venues = action.payload;
      state.pickedVenue =
        action.payload[Math.floor(Math.random() * action.payload.length)];

      if (state.pickedVenue) {
        /* @ts-ignore */
        state.pickedVenueMapUrl = `${state.pickedVenue.location.lat},${state.pickedVenue.location.lng}`;
      } else {
        state.pickedVenue = { name: "Sorry, no result..." };
        state.pickedVenueMapUrl = "";
      }
    });

    builder.addCase(fetchRestaurantDetail.fulfilled, (state, action) => {
      state.pickedVenue = action.payload;
    });

    builder.addCase(actionResetVenues.type, (state, action) => {
      state.venues = [];
    });

    builder.addCase(actionResetPickedVenue.type, (state, action) => {
      state.pickedVenue = {};
    });
  },
});

export const store = configureStore({
  reducer: venueSlice.reducer,
});

export * from "./types";
