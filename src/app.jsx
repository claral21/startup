import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="login_body">
      <header>
        <h1>Welcome to MEtronome</h1>
        <nav>
          <menu className="navigation">
            <li><a className="Hyperlink" href="login.html">Login</a></li>
            <li><a className="Hyperlink" href="soundmaker.html">Start</a></li>
          </menu>
        </nav>
      </header>

      <main>
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
          <img src="./Public/metronome_icon2.png" alt="MetronomeIMG1" width="300" />
        </div>
      </main>

      <footer>
        <div className="footer_words">
          <span className="text-reset">Author Name: Clara Pitts</span>
          <a className="Hyperlink" href="https://github.com">GitHub</a>
        </div>
      </footer>
    </div>
  );
}