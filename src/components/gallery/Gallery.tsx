import React from "react";

import { getUsers } from "../../services/getUsers";
const GalleryList = React.lazy(() => import("./GalleryList"));

function Gallery(): JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      getUsers(100).then((res) => {
        // Simulate slow load
        setTimeout(() => {
          setUsers(res);
          setLoading(false);
        }, 2000);
      });
    };
    loadUsers();
  }, []);

  return <GalleryList users={users} loading={loading} />;
}

export default Gallery;
