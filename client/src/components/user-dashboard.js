import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useData } from '../hooks/dispatch';

function UserDashboard(props) {
    const { data, fetchData } = useData();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <h1>This is the User dashboard page</h1>
            <p>Here some data: {data && data.express}</p>
        </Box>
    );
}

export default UserDashboard;
