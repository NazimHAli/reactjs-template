import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style/base.scss";

const Gallery = React.lazy(() => import("./components/Gallery"));

ReactDOM.render(
  <div>
    <React.Suspense fallback={<div>...</div>}>
      <Gallery />
    </React.Suspense>
  </div>,
  document.getElementById("root")
);