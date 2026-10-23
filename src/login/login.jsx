import React from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';

export function Login({setUser, user}) {
  const [currentusername, setcurrentusername] = React.useState('');
  const navigate = useNavigate();
  function loginUser(){
    localStorage.setItem('user', currentusername);
    setUser(currentusername);
    navigate('/soundmaker');
  }
  function logoutUser(){
    localStorage.removeItem('user');
    setUser(null);
  }

  function nameisinput(e){ // in this case the e is an event that comes from the DOM, we need to remember it
    setcurrentusername(e.target.value);
    console.log(e.target.value);
  }

  function loginform () {
    return (
      <form method="get" id="login_form">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="type here" id="username" onChange = {nameisinput} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" id="password" />
          </div>
          <div className="login_buttons">
            {/* the loginUser function call below is to simulate the eventual login process */}
            <button type="button" name="login" value="access_user_info" onClick = {loginUser}>Login</button> {/* I got rid of type="submit" */}
            <button type="button" name="create_user" value="save_new_user">Create</button> {/* I got rid of type="submit" */}
          </div>
        </form>
    );
  }

  function logoutform () {
    return (
    <form method="get" id="logout_form">
          <div>
            <h3>Logout Below</h3>
          </div>
          <div className="login_buttons">
            {/* the loginUser function call below is to simulate the eventual login process */}
            <button type="button" name="login" value="access_user_info" onClick = {logoutUser}>Logout</button> {/* I got rid of type="submit" */}
          </div>
        </form>
    );
  }

  return (
    <main className="login_body">
        {!user && <h2>Login or Create an Account</h2>}
        {/* <form method="get" action="soundmaker.html" id="login_form"> */}
        <div className="login-container">
        {user ? logoutform() : loginform()}
        </div>

        {/*}
        <form method="get" id="login_form">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="type here" id="username" onChange = {nameisinput} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" id="password" />
          </div>
          <div className="login_buttons">
            {/* the loginUser function call below is to simulate the eventual login process */} {/*}
            <button type="button" name="login" value="access_user_info" onClick = {loginUser}>Login</button>
            <button type="button" name="create_user" value="save_new_user">Create</button> 
          </div>
        </form> 
        */}

        <div id="metronome_container1">
          <img src="/metronome_icon2.png" alt="MetronomeIMG1" width="300" />
        </div>
      </main>
  );
}