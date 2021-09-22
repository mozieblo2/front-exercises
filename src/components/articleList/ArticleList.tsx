import React from 'react';
import { connect } from 'react-redux';
import './ArticleList.css';

interface ArticleListProps {
    articles: IArticleList[]
}

type IArticleList = {
    title: string;
    id: number;
}

type IState = {
    articles: IArticleList[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <div>
            {articles.map((article: IArticleList) => {
                return (
                    <li
                        key={`${article.id}-${Math.random()}`}
                        className="articleList"
                    >
                        <p>{article.title}</p>
                        <p>{article.id}</p>
                    </li>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state: IState) => {
    return { articles: state.articles }
}

export default connect(mapStateToProps)(ArticleList);