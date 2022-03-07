import { Box } from "@mui/material";

import { Layout } from "./Layout";
import { Selected } from "./Selected";
import { Search } from "./Search";

import { H2, H3 } from "./styled";

export const App = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 1,
          px: 2,
          width: "100%",
          alignItems: "center",
        }}
      >
        <H2>Feeling lucky!</H2>
        <Selected />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 1,
          px: 2,
          width: "100%",
          alignItems: "center",
        }}
      >
        <H3>Or, search your meal</H3>
        <Search />
      </Box>
    </Layout>
  );
};
