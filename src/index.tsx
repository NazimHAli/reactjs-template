import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style/base.scss";

const TopComp = React.lazy(() => import("./components/TopComp"));

ReactDOM.render(
  <div>
    <React.Suspense fallback={<div>Index Loading...</div>}>
      <TopComp />
    </React.Suspense>
  </div>,
  document.getElementById("root")
);