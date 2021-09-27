import * as React from "react";
import { any } from "prop-types";

import "../style/list.scss";
const Thumbnail = React.lazy(() => import("./Thumbnail"));

function User({ user }): JSX.Element {
  return (
    <li>
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Thumbnail image={user.picture.large} />
      </React.Suspense>
    </li>
  );
}

User.propTypes = {
  user: any,
};

export default User;
