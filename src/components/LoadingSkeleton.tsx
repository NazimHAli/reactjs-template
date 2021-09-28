import React from "react";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { number } from "prop-types";

function LoadingSkeleton({ index }) {
  return (
    <Box key={index} sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
      <Skeleton variant="rectangular" width={100} height={100} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="80%" />
      </Box>
    </Box>
  );
}

LoadingSkeleton.propTypes = {
  index: number,
};

export default LoadingSkeleton;
