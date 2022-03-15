import {
  createSlice,
  configureStore,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import {
  searchRestaurants,
  getRestaurantDetail,
  getRestaurantPhotos,
} from "../utils";

export const fetchVenues = createAsyncThunk(
  "venues/fetchVenues",
  async ({ query }: { query?: string }) => {
    const data = await searchRestaurants({ query });
    /* @ts-ignore */
    return data.results;
  }
);

export const fetchRestaurantDetail = createAsyncThunk(
  "venues/fetchRestaurantDetail",
  async ({ id }: { id: string }) => {
    /* @ts-ignore */
    const data = await getRestaurantDetail({ id });
    /* @ts-ignore */
    return { ...data };
  }
);

export const fetchRestaurantPhotos = createAsyncThunk(
  "venues/fetchRestaurantPhotos",
  async ({ id }: { id: string }) => {
    /* @ts-ignore */
    const data = await getRestaurantPhotos({ id });
    /* @ts-ignore */
    return [...data] as never[];
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
    pickedVenuePhotos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVenues.fulfilled, (state, action) => {
      state.venues = action.payload;
      state.pickedVenue =
        action.payload[Math.floor(Math.random() * action.payload.length)];

      if (state.pickedVenue) {
        /* @ts-ignore */
        state.pickedVenueMapUrl = `${state.pickedVenue.geocodes.main.latitude},${state.pickedVenue.geocodes.main.longitude}`;
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

    builder.addCase(fetchRestaurantPhotos.fulfilled, (state, action) => {
      state.pickedVenuePhotos = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: venueSlice.reducer,
});

export * from "./types";
