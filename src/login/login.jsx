import React from 'react';
import '../app';


export function Login() {
  return (
    <main className="login_body">
        <h2>Login or Create an Account</h2>
        <form method="get" action="soundmaker.html" id="login_form">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="type here" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" id="password" />
          </div>
          <div className="login_buttons">
            <button type="submit" name="login" value="access_user_info">Login</button>
            <button type="submit" name="create_user" value="save_new_user">Create</button>
          </div>
        </form>

        <div id="metronome_container1">
          <img src="/metronome_icon2.png" alt="MetronomeIMG1" width="300" />
        </div>
      </main>
  );
}