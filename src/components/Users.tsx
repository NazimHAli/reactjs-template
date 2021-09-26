import * as React from "react";
import "../style/list.scss";
const Thumbnail = React.lazy(() => import("./Thumbnail"));
import { array } from "prop-types";

function Users({ users }): JSX.Element {
  const listElements = users.map((user, index) => (
    <li key={index}>
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Thumbnail image={user.picture.thumbnail} />
      </React.Suspense>
    </li>
  ));

  return <ol data-testid="users-ul">{listElements}</ol>;
}

Users.propTypes = {
  users: array,
};

export default Users;
