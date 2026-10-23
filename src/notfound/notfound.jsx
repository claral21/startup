import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import '../app.css';

export function NotFound() {
//   return <main>404: Return to sender. Address unknown.</main>;
// }

return (
        <main className="unicorn_body">
            <div className="unicorn_content" style={{ maxWidth: "600px" }}>
                <div role="img" aria-label="Unicorns" style={{ fontSize: "4rem" }}>
                    🦄✨🦄
                </div>
                <h1 className="display-4">404: Unicorns not found</h1>
                <p className="lead">
                    This page galloped off into the rainbow. Check the address and try
                    again.
                </p>
                <NavLink className="btn btn-light mt-2" to="/">
                    Back to Login
                </NavLink>
            </div>
        </main>
    );
}