import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, ImageList, ImageListItem, Button } from "@mui/material";
import { useGetRestaurantDetail, useGetRestaurantPhotos } from "../../hooks";
import { urlConfig } from "../../utils";

import { Layout } from "../Layout";

export const Detail = () => {
  const { id } = useParams();
  /* @ts-ignore */
  const { pickedVenue, pickedVenueMapUrl, pickedVenuePhotos } = useSelector(
    (state) => state
  );
  const getRestaurantDetail = useGetRestaurantDetail({ id: id || "" });
  const getRestaurantPhotos = useGetRestaurantPhotos({ id: id || "" });

  useEffect(() => {
    getRestaurantDetail();
  }, [getRestaurantDetail]);

  useEffect(() => {
    getRestaurantPhotos();
  }, [getRestaurantPhotos]);

  if (Object.keys(pickedVenue).length === 0 || pickedVenuePhotos.length === 0)
    return null;
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
        <Box sx={{ mb: 2 }}>{pickedVenue.location.formattedAddress}</Box>
      )}
      <Button
        sx={{ mb: 4 }}
        href={`${urlConfig.mapUrl}${pickedVenueMapUrl}`}
        color="primary"
      >
        Show me the map
      </Button>
      <ImageList
        sx={{ width: 600, maxHeight: 900 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {pickedVenuePhotos &&
          [...pickedVenuePhotos].map((item: any) => (
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
