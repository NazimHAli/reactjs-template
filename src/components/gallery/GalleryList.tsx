import React from "react";

import { Grid } from "@mui/material";
import { array, bool } from "prop-types";

import { GalleryListItem } from "./GalleryListItem";
const LoadingSkeleton = React.lazy(() => import("../LoadingSkeleton"));
const User = React.lazy(() => import("../User"));

function GalleryList({ loading, users }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 4, md: 6 }}
    >
      {Array.from(loading ? Array(20) : users).map((user, index) => (
        <Grid item key={index} sx={{ width: 200, height: 300 }} >
          <GalleryListItem key={index}>
            {loading ? <LoadingSkeleton index={index} /> : <User user={user} />}
          </GalleryListItem>
        </Grid>
      ))}
    </Grid>
  );
}

GalleryList.propTypes = {
  loading: bool,
  users: array,
};

export default GalleryList;
