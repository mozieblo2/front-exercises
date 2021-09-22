import store from './store/index'
import { addArticle } from './actions/index';

// added to check store in devtools
window.store = store;
window.addArticle = addArticle;