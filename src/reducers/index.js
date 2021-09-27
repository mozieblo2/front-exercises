import { ADD_ARTICLE, DATA_LOADED, REMOVE_ARTICLE, API_ERRORED } from '../constants/action-types';

const initialState = {
    articles: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            })
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