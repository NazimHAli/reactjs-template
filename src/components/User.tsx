import * as React from "react";
import { any } from "prop-types";

import "../style/list.scss";
const UserThumbnail = React.lazy(() => import("./UserThumbnail"));

function User({ user }): JSX.Element {
  return (
    <React.Fragment>
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <UserThumbnail image={user.picture.large} />
    </React.Fragment>
  );
}

User.propTypes = {
  user: any,
};

export default User;
