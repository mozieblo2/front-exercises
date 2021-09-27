import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, getData2 } from '../../actions';
import '../articleList/ArticleList.css';

type PostProps = {
    getData: () => void;
    getData2: (payload: string) => void;
    articles: IArticleList[]
}

type PostState = {
    test: string;
}

type IArticleList = {
    title: string;
    id: number;
}

type IState = {
    articles: IArticleList[],
    remoteArticles: []
}

export class Post extends Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
        this.state = {
            test: ""
        }
    }

    componentDidMount() {
        this.props.getData();
        this.props.getData2('https://jsonplaceholder.typicode.com/posts');
    }

    render() {
        return (
            <ul className="articleList">
                {this.props.articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state: IState) {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getData, getData2 }
)(Post);