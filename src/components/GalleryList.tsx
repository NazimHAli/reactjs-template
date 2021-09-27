import { Grid } from "@mui/material";
import { array, bool } from "prop-types";
import React from "react";
import { GalleryListItem } from "./GalleryListItem";
import LoadingSkeleton from "./LoadingSkeleton";
const User = React.lazy(() => import("./User"));

function GalleryList({ loading, users }) {
  return (
    <React.Suspense fallback={<div>Users Loading...</div>}>
      {Array.from(loading ? Array(10) : users).map((user, index) => (
        <Grid item xs={1} sm={2} md={3} key={index}>
          <GalleryListItem>
            {loading ? <LoadingSkeleton index={index} /> : <User user={user} />}
          </GalleryListItem>
        </Grid>
      ))}
    </React.Suspense>
  );
}

GalleryList.propTypes = {
  loading: bool,
  users: array,
};

export default GalleryList;
