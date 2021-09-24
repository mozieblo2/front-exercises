import React from 'react';
import { connect } from 'react-redux';
import RemoveButton from '../removeButton/RemoveButton';
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
        <ul className="articleList">
            {articles.map((article: IArticleList) => {
                return (
                    <li
                        key={article.id}
                        className="articleLi"
                    >
                        <p>{article.title}</p>
                        <RemoveButton id={article.id}/>
                    </li>
                )
            })}
        </ul>
    );
}

const mapStateToProps = (state: IState) => {
    return { articles: state.articles }
}

export default connect(mapStateToProps)(ArticleList);