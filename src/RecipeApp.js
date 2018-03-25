import React, {Component} from 'react';
import Navbar from './Navbar'
import RecipeList from './RecipeList'
import './RecipeApp.css';
import RecipeInput from "./RecipeInput";

class RecipeApp extends Component {

    constructor(props){
        super(props);
        this.state={
            recipes: [
                {
                    id:0,
                    title: 'Spaghetti',
                    instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                    ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                    img: "https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg"
                },
                {
                    id:1,
                    title: "Milkshake",
                    instructions: "Combine ice cream and milk.  Blend until creamy",
                    ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                    img: "https://fthmb.tqn.com/sHI14VwgA58daPo0TSY-ishRJk8=/2122x1415/filters:fill(auto,1)/172192393-56a20fea3df78cf7727188b7.jpg"
                },
                {
                    id:2,
                    title: "Avocado Toast",
                    instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                    ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
                }
            ],
            nextRecipeId:3,
            isForm: false
        };

        this.handleSave= this.handleSave.bind(this);
        this.onDelete= this.onDelete.bind(this);
    }

    handleSave(recipe){
        this.setState((prevState, props) => {
            const newRecipe = {...recipe, id: this.state.nextRecipeId};
            return {
                nextRecipeId: prevState.nextRecipeId+1,
                recipes: [...this.state.recipes, newRecipe],
                isForm: false
            }
        })
    }

    onDelete(id){
        const recipes= this.state.recipes.filter(r => r.id!== id);
        this.setState({recipes});
    }

    render() {
        const {isForm}= this.state;
        return (
            <div>
                <Navbar onShowForm={()=> this.setState({isForm: true})}/>
                {isForm ? <RecipeInput
                    onSave={this.handleSave}
                    onClose={()=> this.setState({isForm: false})}
                />: null}
                <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default RecipeApp;
