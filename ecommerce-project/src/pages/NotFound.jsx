import { NavLink } from 'react-router';
import { Header } from '../components/Header.jsx';

import './NotFound.css';

export function NotFound() {
    return (
        <>
            <title>Page Not Found</title>

            <Header />

            <div className="page">


                <main className="not-found-main">
                    <div className="not-found-card">
                        <h1 className="not-found-title">404</h1>
                        <p className="not-found-text">
                            Oops! The page you are looking for does not exist.
                        </p>
                        <NavLink to="/" className="not-found-button">
                            Go back to Home
                        </NavLink>
                    </div>
                </main>
            </div>
        </>
    );
}
