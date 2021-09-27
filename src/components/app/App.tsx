import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import DragAndDropPage from '../../pages/dragAndDropPage/DragAndDropPage';
import ArticlesPage from '../../pages/articlesPage/ArticlesPage';
import HomePage from '../../pages/homePage/HomePage';
import GeneratorPage from '../../pages/generatorPage/GeneratorPage';
import { ROUTES } from '../../router/router';
import './App.css';

function App() {
    const { HOME, DRAG_AND_DROP, REDUX, GENERATOR } = ROUTES
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={DRAG_AND_DROP}>
                        <DragAndDropPage />
                    </Route>
                    <Route path={REDUX}>
                        <ArticlesPage />
                    </Route>
                    <Route path={GENERATOR}>
                        <GeneratorPage />
                    </Route>
                    <Route path={HOME}>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
