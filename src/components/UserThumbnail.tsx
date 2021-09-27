import React from "react";
import { string } from "prop-types";

function UserThumbnail({ image }): JSX.Element {
  return <img srcSet={image} loading="lazy" />;
}

UserThumbnail.propTypes = {
  image: string
};

export default UserThumbnail;
