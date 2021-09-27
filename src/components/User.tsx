import * as React from "react";
import { any } from "prop-types";

import "../style/list.scss";
const UserThumbnail = React.lazy(() => import("./UserThumbnail"));

function User({ user }): JSX.Element {
  return (
    <li>
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserThumbnail image={user.picture.large} />
      </React.Suspense>
    </li>
  );
}

User.propTypes = {
  user: any,
};

export default User;
