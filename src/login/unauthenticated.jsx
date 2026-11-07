import React from 'react';
import { MessageDialog } from './messageDialog';
import { useNavigate } from 'react-router-dom';
import '../app.css';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('user', userName);
      props.onLogin(userName);
      navigate('/soundmaker');
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
     <>
      <h2>Login or Create an Account</h2>
        <form method="get" id="login_form">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="type here" id="username" value={userName} onChange = {(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" id="password" onChange = {(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login_buttons">
            {/* the loginUser function call below is to simulate the eventual login process */}
            <button type="button" name="login" value="access_user_info" onClick = {() => loginUser()} disabled={!userName || !password}>Login</button> {/* I got rid of type="submit" */}
            <button type="button" name="create_user" value="save_new_user" onClick = {() => createUser()} disabled={!userName || !password}>Create</button> {/* I got rid of type="submit" */}
          </div>
        </form>
        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>   
  );
}

