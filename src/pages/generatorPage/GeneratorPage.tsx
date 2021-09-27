import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/router';
import Generator from '../../components/generator/Generator';

function GeneratorPage() {
    const { HOME } = ROUTES;
    return (
        <div>
            <Link to={HOME}>Home</Link>
            <h2>Generator Function</h2>
            <Generator />
        </div>
    )
}

export default GeneratorPage;