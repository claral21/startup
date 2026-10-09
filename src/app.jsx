import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Soundmaker } from './soundmaker/soundmaker';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <h1>Welcome to MEtronome</h1>
        <nav>
          <menu className="navigation">
            <NavLink className="nav-link" to="">Login</NavLink>
            <NavLink className="nav-link" to="soundmaker">Start</NavLink>
          </menu>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/soundmaker' element={<Soundmaker />} />
        <Route path='*' element={<NotFound />} />
    </Routes>

      <footer>
        <div className="footer_words">
          <span className="text-reset">Author Name: Clara Pitts</span>
          <a className="Hyperlink" href="https://github.com">GitHub</a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}