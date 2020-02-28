import React from "react";

const Recipe = ({ clicked, recipe, ...props }) => {
  // console.log(props.food)
  return (
    <>
      {clicked && (
        <>
          <tr>
            <td>{props.food} Recipe:</td>
            {recipe.IngredientRecipes.map(ingredientRecipe => {
              return (
                <td key={ingredientRecipe.id}>
                  {ingredientRecipe.ingredient.name}{" "}
                  <img src={ingredientRecipe.ingredient.imageURL} />
                </td>
              );
            })}
          </tr>
        </>
      )}
    </>
  );
};

export default Recipe;
