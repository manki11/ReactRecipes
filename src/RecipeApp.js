import React, {Component} from 'react';
import Navbar from './Navbar'
import RecipeList from './RecipeList'
import './RecipeApp.css';

class RecipeApp extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <RecipeList/>
            </div>
        );
    }
}

export default RecipeApp;
