import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, } from 'react-router-dom';
import { Login } from './login/login';
import { Soundmaker } from './soundmaker/soundmaker';
import { NotFound } from './notfound/notfound';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('user') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
    <div>
      <header>
        <h1>Welcome to MEtronome</h1>
        <nav>
          <menu className="navigation">
            <NavLink className="nav-link" to="/">Login</NavLink>
            {authState === AuthState.Authenticated && <NavLink className="nav-link" to="soundmaker">Start</NavLink>}
          </menu>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} exact />
        {authState === AuthState.Authenticated && <Route path='/soundmaker' element={<Soundmaker user= {userName}/>} />}
        <Route path='*' element={<NotFound />} />

    </Routes>

      <footer>
        <div className="footer_words">
          <span className="text-reset">Author Name: Clara Pitts</span>
          <a className="Hyperlink" href="https://github.com/claral21/startup">GitHub</a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

// FUNCTIONS I MIGHT WANT TO USE IN MY PROJECT:

// THIS FUNCTION IS THE GENERAL IDEA BEHIND UPDATING MY TABLE, MINUS DELETING THE FIRST ROW
// function changeAside() {
//   const username = document.getElementById('username');
//   const liveupdatetable = document.getElementById('liveupdatetable');
//   const item = document.createElement('tr');
//     item.textContent = username + ' created a new sound';
//     liveupdatetable.appendChild(item);
// }

