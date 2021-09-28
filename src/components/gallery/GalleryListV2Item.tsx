import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { object } from "prop-types";

function GalleryListV2Item({ user }): JSX.Element {
  return (
    <ImageListItem>
      <img
        srcSet={`${user.picture.large}`}
        alt={user.name.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={user.name.title}
        subtitle={`${user.name.first} ${user.name.last}`}
      />
    </ImageListItem>
  );
}

GalleryListV2Item.propTypes = {
  user: object,
};

export default GalleryListV2Item;
