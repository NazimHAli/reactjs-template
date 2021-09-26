import React from "react";
import { string } from "prop-types";

function Thumbnail({ image }): JSX.Element {
  return <img srcSet={image} loading="lazy" />;
}

Thumbnail.propTypes = {
  image: string
};

export default Thumbnail;
