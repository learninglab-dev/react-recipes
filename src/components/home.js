import React from 'react';
import Header from './header';
import RecipeList from './recipelist';
import RecipeDetail from './recipedetail';

// fetch(`${API_URL}/v1/recipes`)
//   .then(res => {console.log(JSON.stringify(res)); return res})
//   .then(res => res.json())
//   .then(json => {console.log(json); return json})

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
    };
    // this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    // console.log("about to fetch " + `${API_URL}/v1/recipes`);
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      // .then(json => {console.log(json); return json})
      .then((json) => {
        // console.log("about to set state" + JSON.stringify(json));
        this.setState({
          recipes: json,
        });
        // console.log("done setting state");
      });
  }

  onRecipeClick = (id) => {
    // console.log("about to fetch " + `${API_URL}/v1/recipes/${id}`);
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then((data) => {
        console.log('got your data');
        console.log(JSON.stringify(data));
        return data;
      })
      .then(res => res.json())
      .then((recipe) => {
        // console.log("about to set state" + JSON.stringify(recipe));
        this.setState({
          currentRecipe: recipe,
        });
        console.log('done setting state');
      });
  };

  render() {
    console.log('state from within the render method');
    const { recipes, currentRecipe } = this.state;
    // console.log(JSON.stringify(recipes));
    return (
      <div>
        <Header />
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />
          <RecipeDetail
            className="ml4"
            style={{ flex: 5 }}
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default Home;
