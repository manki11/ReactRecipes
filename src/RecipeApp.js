import React, {Component} from 'react';
import Navbar from './Navbar'
import Recipe from './Recipe'
import './RecipeApp.css';

class RecipeApp extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Recipe
                    title="Pasta"
                    ingredients={["flour", "water", "sauce"]}
                    instructions="Mix Ingredients"
                    img_url="http://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
                />
            </div>
        );
    }
}

export default RecipeApp;
