import React from 'react';

import '../app.css';

export function Authenticated(props) {

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('user');
        props.onLogout();
      });
  }

  return (
    <form method="get" id="logout_form">
          <div>
            <h3>Logout Below</h3>
          </div>
          <div className="login_buttons">
            {/* the loginUser function call below is to simulate the eventual login process */}
            <button type="button" name="login" value="access_user_info" onClick = {logout}>Logout</button> {/* I got rid of type="submit" */}
          </div>
        </form>
    );
}
