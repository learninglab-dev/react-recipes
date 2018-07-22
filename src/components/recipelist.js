import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  // console.log("rendering RecipeList");
  // console.log(JSON.stringify(props));
  const { style, recipes, onClick } = props;
  return (
    <div style={style}>
      <h2 className="h2">
        Recipes
      </h2>
      <ul className="list-reset">
        {recipes.map(recipe => (
          <li
            className="py2 border-bottom border-bottom-dashed pointer"
            key={recipe.id}
            onClick={() => onClick(recipe.id)}
          >
            <span style={{ fontWeight: 900 }}>
              {recipe.name}
            </span>
            <span>
              {recipe.category}
            </span>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
};

RecipeList.defaultProps = {
  style: {},
  recipes: [],
  onClick: {},
};

export default RecipeList;
