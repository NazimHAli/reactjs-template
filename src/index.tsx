import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style/base.scss";

const BaseContainer = React.lazy(() => import("./components/BaseContainer"));
const Gallery = React.lazy(() => import("./components/gallery/Gallery"));

const container = <Gallery />;

ReactDOM.render(
  <React.Suspense fallback={<div>...</div>}>
    <BaseContainer element={container} />
  </React.Suspense>,
  document.getElementById("root")
);
