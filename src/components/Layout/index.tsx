import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { useResetVenues } from "../../hooks";
import { H1 } from "../styled";

import { Main, Header, Footer, Logo } from "./styled";

export const Layout: FC = ({ children }) => {
  const navigate = useNavigate();
  const { resetPickedVenue } = useResetVenues();

  const onClick = useCallback(() => {
    resetPickedVenue();
    navigate("/");
  }, [navigate, resetPickedVenue]);

  return (
    <Main sx={{ m: "auto" }}>
      <Header>
        <Logo onClick={onClick}>
          <H1>Restaurant Finder</H1>
        </Logo>
      </Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          p: 4,
        }}
      >
        {children}
      </Box>
      <Footer sx={{ mb: 6 }}>Restaurant Finder. 2022 ~</Footer>
    </Main>
  );
};
