import { ADD_ARTICLE, DATA_LOADED, REMOVE_ARTICLE } from '../constants/action-types';

// action creator
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function removeArticle(id) {
    return { type: REMOVE_ARTICLE, id }
}

// thunk middleware in action creator
export function getData() {
    return function(dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
        });
    };
}