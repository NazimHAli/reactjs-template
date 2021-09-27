import React from "react";
import Grid from "@mui/material/Grid";

import { getUsers } from "../services/getUsers";
const GalleryList = React.lazy(() => import("./GalleryList"));

function Gallery(): JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      getUsers(20).then((res) => {
        // Simulate slow load
        setTimeout(() => {
          setUsers(res);
          setLoading(false);
        }, 2000);
      });
    };
    loadUsers();
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      <GalleryList loading={loading} users={users} />
    </Grid>
  );
}

export default Gallery;
