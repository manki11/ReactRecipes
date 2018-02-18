import React, {Component} from 'react';
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {

        recipes: [
            {
                title: 'Spaghetti',
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                img: "https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "https://fthmb.tqn.com/sHI14VwgA58daPo0TSY-ishRJk8=/2122x1415/filters:fill(auto,1)/172192393-56a20fea3df78cf7727188b7.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
            }
        ]
    };


    render() {
        const recipes = this.props.recipes.map((r, index) => (<Recipe key={index} {...r}/>))

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}


export default RecipeList;