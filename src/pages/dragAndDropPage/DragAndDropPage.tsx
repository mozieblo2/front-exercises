import React from 'react';
import DragAndDrop from '../../components/dragAndDrop/DragAndDrop';
import './DragAndDropPage.css';
import { ROUTES } from '../../router/router';
import {Link} from "react-router-dom";

function DragAndDropPage() {
    const { HOME } = ROUTES
    return (
        <div>
            <Link to={HOME}>Home</Link>
            <header className="App-header">
                <h1>Drag and Drop React Logo</h1>
                <DragAndDrop />
            </header>
        </div>
    );
}

export default DragAndDropPage;