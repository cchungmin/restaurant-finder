import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { useResetVenues } from "../../hooks";

import { Container, Name, Category, Count } from "./styled";

export const SingleResult = ({
  id,
  name,
  mainCategoryName,
  count,
}: {
  id: number;
  name: string;
  mainCategoryName: string;
  count: number;
}) => {
  const navigate = useNavigate();
  const { resetVenues, resetPickedVenue } = useResetVenues();

  const backgroundColor = useMemo(() => {
    const color = "#c8e6c9";
    if (count > 10000) return "#1b5e20";
    if (count < 10000 && count > 5000) return "#4caf50";
    return color;
  }, [count]);

  const onClick = useCallback(() => {
    resetVenues();
    resetPickedVenue();
    navigate(`/detail/${id}`);
  }, [id, navigate, resetPickedVenue, resetVenues]);

  return (
    <Grid
      item
      xs={4}
      onClick={onClick}
      sx={{ cursor: "pointer", "&:hover": { opacity: 0.6 } }}
    >
      <Container sx={{ px: 2, py: 1, backgroundColor }}>
        <Name>{name}</Name>
        <Category>{mainCategoryName}</Category>
        <Count>
          {count}
          &nbsp;
          {count <= 1 ? "Checkin" : "Checkins"}
        </Count>
      </Container>
    </Grid>
  );
};
