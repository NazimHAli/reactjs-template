import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { element } from "prop-types";

function BaseContainer({ element }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: "100vh" }}>{element}</Box>
      </Container>
    </React.Fragment>
  );
}

BaseContainer.propTypes = {
  element: element,
};

export default BaseContainer;
