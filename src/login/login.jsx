import React from 'react';
import '../app.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({user, authState, onAuthChange }) {

  return (
    <main className="login_body">
        {authState === AuthState.Authenticated && (
          <Authenticated userName={user} onLogout={() => onAuthChange(user, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={user}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
        <div id="metronome_container1">
          <img src="/metronome_icon2.png" alt="MetronomeIMG1" width="300" />
        </div>
      </main>
  );
}