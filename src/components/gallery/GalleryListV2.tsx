import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { array, bool } from "prop-types";

const LoadingSkeleton = React.lazy(() => import("../LoadingSkeleton"));
const GalleryListV2Item = React.lazy(() => import("./GalleryListV2Item"));

function GalleryListV2({ users = [], loading }) {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%", overflow: "hidden", gridAutoColumns: "true" }}
      cols={6}
    >
      <ImageListItem key="Subheader" cols={6}>
        <ListSubheader component="div">Random Users</ListSubheader>
      </ImageListItem>
      {Array.from(loading ? Array(15) : users).map((user, index) =>
        loading ? (
          <LoadingSkeleton index={index} key={index} />
        ) : (
          <GalleryListV2Item key={index} user={user} />
        )
      )}
    </ImageList>
  );
}

GalleryListV2.propTypes = {
  loading: bool,
  users: array,
};

export default GalleryListV2;
