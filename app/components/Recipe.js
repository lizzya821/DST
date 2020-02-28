import React from "react";

const Recipe = ({ clicked, recipe, food, ...props }) => {
  return (
    < div className="recipes">
      {clicked && (
        <>
          <tr>
            <td>{food} Recipe:</td>
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
    </div>
  );
};

export default Recipe;
