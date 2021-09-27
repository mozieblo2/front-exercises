import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { removeArticle } from '../../actions'

type RemoveButtonProps = {
    id: number;
}

interface IState {
    articles: IArticleList[],
    remoteArticles: IRemoteArticleList[]
}

type IArticleList = {
    title: string;
    id: number;
}

type IRemoteArticleList = {
    title: string;
    id: number;
}

const RemoveButton = ({ id }: RemoveButtonProps) => {
    // read Redux state
    const articles = useSelector((state: IState) => state.articles);
    // dispatch action
    const dispatch = useDispatch();
    const title = articles.map(article => {
        if (article.id === id) {
            return article.title;
        }
        return '';
    })

    const removeState = (id: number) => {
        // dispatch action
        dispatch(removeArticle(id));
    }

    return (
        <MyButton onClick={() => removeState(id)}>
            Remove {title}
        </MyButton>
    )
}

const MyButton = styled.button`
  margin-left: 20px;
  border-radius: 10px;
  background: #282c34;
  color: #ffffff;
`;

export default RemoveButton;