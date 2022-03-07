import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, ImageList, ImageListItem, Button } from "@mui/material";
import { useGetRestaurantDetail } from "../../hooks/useGetRestaurantDetail";
import { urlConfig } from "../../utils";

import { Layout } from "../Layout";

export const Detail = () => {
  const { id } = useParams();
  /* @ts-ignore */
  const { pickedVenue, pickedVenueMapUrl } = useSelector((state) => state);
  const getRestaurantDetail = useGetRestaurantDetail({ id: id || "" });

  useEffect(() => {
    getRestaurantDetail();
  }, [getRestaurantDetail]);

  if (Object.keys(pickedVenue).length === 0) return null;
  return (
    <Layout>
      <h2>{pickedVenue.name}</h2>
      {pickedVenue.price && <p>{pickedVenue.price.message}</p>}
      {pickedVenue.rating && (
        <Box sx={{ color: `#${pickedVenue.ratingColor}`, mb: 2 }}>
          <h3>{pickedVenue.rating}</h3>
        </Box>
      )}
      {pickedVenue.location && (
        <Box sx={{ mb: 2 }}>
          {pickedVenue.location.formattedAddress.join(", ")}
        </Box>
      )}
      <Button
        sx={{ mb: 4 }}
        href={`${urlConfig.mapUrl}${pickedVenueMapUrl}`}
        color="primary"
      >
        Show me the map
      </Button>
      <ImageList
        sx={{ width: 600, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {pickedVenue.photos &&
          pickedVenue.photos.groups &&
          pickedVenue.photos.groups[0] &&
          pickedVenue.photos.groups[0].items.map((item: any) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.prefix}200X200${item.suffix}`}
                srcSet={`${item.prefix}400x400${item.suffix}`}
                alt={item.id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Layout>
  );
};
