import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/router';
import ArticleList from '../../components/articleList/ArticleList';
import Form from '../../components/form/Form';

function ArticlesPage() {
    const { HOME } = ROUTES;
    return (
        <div>
            <Link to={HOME}>Home</Link>
            <Form />
            <h2>Articles:</h2>
            <ArticleList />
        </div>
    )
}

export default ArticlesPage;