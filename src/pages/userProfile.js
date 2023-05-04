import React from 'react';
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'
import { useAuth0 } from "@auth0/auth0-react"

const UserProfile = () => {
  const { isLoading, error } = useAuth0 ()

  return (
    <aside className ="login">
      <h3 className = "authTitle">User Profile</h3>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
        </>
      )}
    </aside>
  )
}

export default UserProfile

// user Profile, login, logout pages from this tutorial: https://www.youtube.com/watch?v=pAzqscDx580
