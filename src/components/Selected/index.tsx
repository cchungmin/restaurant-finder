import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Typography,
} from "@mui/material";

import { CtaContainer } from "../CtaContainer";
import { useGetRestaurantDetail } from "../../hooks/useGetRestaurantDetail";
import { urlConfig } from "../../utils";

export const Selected = () => {
  /* @ts-ignore */
  const { pickedVenue, pickedVenueMapUrl } = useSelector((state) => state);
  const navigate = useNavigate();
  const getRestaurantDetail = useGetRestaurantDetail({
    id: pickedVenue.fsq_id,
  });

  const onClick = useCallback(() => {
    navigate(`/detail/${pickedVenue.fsq_id}`);
  }, [navigate, pickedVenue]);

  useEffect(() => {
    getRestaurantDetail();
  }, [getRestaurantDetail]);

  if (Object.keys(pickedVenue).length === 0) return null;
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        <CardContent sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", maxWidth: "300px" }}>
            {pickedVenue.bestPhoto && (
              <CardMedia
                component="img"
                image={`${pickedVenue.bestPhoto.prefix}width300${pickedVenue.bestPhoto.suffix}`}
                alt={pickedVenue.name}
                sx={{ minWidth: "100%" }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", p: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
              <h2>{pickedVenue.name}</h2>
              <h3>{pickedVenue.rating || "N/A"}</h3>
              <Typography>
                {pickedVenue.hours
                  ? `In service. ${pickedVenue.hours.status}`
                  : "Out of service"}
              </Typography>
            </Box>
            <Grid container>
              {pickedVenue.categories &&
                pickedVenue.categories.map((item: any) => (
                  <Grid item spacing={2} key={item.id} sx={{ p: 1 }}>
                    <CardMedia
                      component="img"
                      image={`${item.icon.prefix}64${item.icon.suffix}`}
                      alt={item.icon.name}
                      height="64"
                      width="64"
                      sx={{ backgroundColor: "#444" }}
                    />
                  </Grid>
                ))}
            </Grid>
            <CardActions>
              <CtaContainer
                phone={
                  (pickedVenue.contact && pickedVenue.contact.phone) || null
                }
                mapUrl={`${urlConfig.mapUrl}${pickedVenueMapUrl}`}
              />
            </CardActions>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
