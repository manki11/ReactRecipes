import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';

class App extends Component {
  render() {
    return (
      <Recipe
          title="Pasta"
          ingredients={["flour","water","sauce"]}
          instructions="Mix Ingredients"
          img_url="http://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg"
      />
    );
  }
}

export default App;
