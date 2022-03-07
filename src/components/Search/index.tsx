import { useCallback, ChangeEvent, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, InputLabel, Box, Button } from "@mui/material";

import { useSearchRestaurants, useResetVenues } from "../../hooks";

export const Search = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(query);
  const searchRestaurants = useSearchRestaurants();
  const { resetPickedVenue, resetVenues } = useResetVenues();

  const onSearchClick = useCallback(() => {
    if (!keyword || keyword.trim() === "") return;
    resetPickedVenue();
    navigate(`/search/${keyword}`);
  }, [keyword, navigate, resetPickedVenue]);

  const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
  }, []);

  useEffect(() => {
    resetPickedVenue();
    resetVenues();
    searchRestaurants({ query });
  }, [query, resetPickedVenue, resetVenues, searchRestaurants]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        pb: 4,
      }}
    >
      <Box
        sx={{ mb: 2, display: "flex", flexDirection: "column", width: "100%" }}
      >
        <InputLabel htmlFor="search-bar">Your favorite food type?</InputLabel>
        <Input
          id="search-bar"
          type="text"
          onChange={onSearchChange}
          value={keyword}
          placeholder={"Food type, restaurant..."}
          sx={{ my: 2, display: "flex", width: "100%" }}
        />
      </Box>
      <Box>
        <Button variant="outlined" onClick={onSearchClick}>
          Search
        </Button>
      </Box>
    </Box>
  );
};
