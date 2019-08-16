import React from 'react';
import { useAuth0 } from '../auth0-wrapper';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout()}>Log out</button>
          <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/dashboard">User Dashboard</Link>
          </span>
        </>
      ) : (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
    </div>
  );
};

export default Nav;
