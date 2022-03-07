import { useSelector } from "react-redux";
import { Grid, Box } from "@mui/material";

import { Layout } from "../Layout";
import { SingleResult } from "../SingleResult";
import { Search } from "../Search";

export const Results = () => {
  /* @ts-ignore */
  const { venues } = useSelector((state) => state);

  return (
    <Layout>
      <Box
        sx={{ display: "flex", flexDirection: "column", p: 4, width: "100%" }}
      >
        <Search />
        <Grid container spacing={2}>
          {venues.map((item: any) => (
            <SingleResult
              key={item.id}
              id={item.id}
              name={item.name}
              mainCategoryName={item.categories[0].name}
              count={item.stats.checkinsCount}
            />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
