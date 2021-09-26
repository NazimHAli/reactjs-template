import React from "react";
import { getUsers } from "../services/getUsers";
const Users = React.lazy(() => import("./Users"));

function TopComp(): JSX.Element {
  let element: JSX.Element;
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      getUsers(20).then((res) => {
        setTimeout(() => {
          setUsers(res);
          setLoading(false);
        }, 1000);
      });
    };
    loadUsers();
  }, []);

  if (loading) {
    element = (<p>Getting data.....</p>);
  } else {
    element = (
      <React.Suspense fallback={<div>Users Loading...</div>}>
        <Users users={users} />
      </React.Suspense>
    );
  }

  return <div>{element}</div>;
}

export default TopComp;
