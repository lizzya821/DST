import React, { useState } from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const FoodRow = props => {
  const food = props.food;
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <tr onClick={() => setClicked(!clicked)}>
        <td>{food.name}</td>
        <td>
          <img src={food.imageURL}></img>
        </td>
        <td>{food.health}</td>
        <td>{food.sanity}</td>
        <td>{food.hunger}</td>
        <td>{food.restrictions.join(",  ")}</td>
      </tr>
      {clicked && <tr><Link to={{pathname:"/addRecipe", foodId:food.id}}>Add A Recipe</Link></tr>}
      {food.recipes.map(recipe => {
        return <Recipe clicked={clicked} recipe={recipe} key={recipe.id} food={food.name} />
      })}
    </>
  );
};
export default FoodRow;
