import { ADD_ARTICLE, DATA_LOADED, REMOVE_ARTICLE, API_ERRORED } from '../constants/action-types';
// import { addArticleRT, removeArticleRT } from '../actions/index';
// import { createReducer} from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    remoteArticles: []
}

// in redux-toolkit we can mutate state directly because, redux-toolkit out of the box create copy without our help
// const rootReducer = createReducer(initialState, {
//     [addArticleRT]: (state, action) => {
//         return state.articles.push(action.payload);
//     }}
// )

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // redux-toolkit instead of redux boilerplate example
        // case addArticleRT.toString():
        //     return Object.assign({}, state, {
        //         articles: state.articles.concat(action.payload)
        //     })
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            })
        // redux-toolkit instead of redux boilerplate example
        // case removeArticleRT.toString():
        //     return Object.assign({}, state, {
        //         remoteArticles: state.remoteArticles.concat(action.payload)
        //     });
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload)
            });
        case REMOVE_ARTICLE:
            const removedArticles = state.articles.filter(article => article.id !== action.id);
            return {
                ...state,
                articles: removedArticles
            }
        case API_ERRORED:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;