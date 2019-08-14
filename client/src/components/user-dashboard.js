import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '../auth0-wrapper';
import { useData } from '../hooks/dispatch';

function UserDashboard(props) {
  const { data, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <h1>This is the User dashboard page</h1>
      <p>Here some data: {data && data.express}</p>
    </Box>
  );
}

export default UserDashboard;
