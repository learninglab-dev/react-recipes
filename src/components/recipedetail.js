import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RecipeDetail = (props) => {
  const { recipe, style, className } = props;
  if (!recipe) {
    console.log('no props.recipe right now');
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
      select a recipe to see details.
      </p>
    );
  }
  console.log('there is props.recipe');
  return (
    <div
      style={style}
      className={classNames('bg-white p2', className)}
    >
      <h2
        className="h2"
      >
        {recipe.name}
      </h2>
      <img
        className="fit"
        src={recipe.image}
        alt={recipe.name}
      />
      <span>
        {recipe.category}
      </span>
      <span>
        {recipe.calories}
      </span>
      <h3>
        Ingredients
      </h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>
        Steps
      </h3>
      <ol>
        {recipe.steps.map(step => (
          <li key={step}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
};

RecipeDetail.defaultProps = {
  style: {},
  recipe: {},
  className: '',
};

export default RecipeDetail;
