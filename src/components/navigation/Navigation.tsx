import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/router';
import './Navigation.css';

function Navigation() {
    const { HOME, DRAG_AND_DROP, REDUX } = ROUTES
    return (
        <div>
            <ul className="navigation">
                <li>
                    <Link to={HOME}>Home</Link>
                </li>
                <li>
                    <Link to={DRAG_AND_DROP}>Drag & Drop</Link>
                </li>
                <li>
                    <Link to={REDUX}>Redux</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;