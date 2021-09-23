import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/router';
import ArticleList from '../../components/articleList/ArticleList';
import Form from '../../components/form/Form';
import Post from '../../components/post/Post';

function ArticlesPage() {
    const { HOME } = ROUTES;
    return (
        <div>
            <Link to={HOME}>Home</Link>
            <Form />
            <h2>Articles:</h2>
            <ArticleList />
            <h2>Articles from outside source:</h2>
            <Post />
        </div>
    )
}

export default ArticlesPage;