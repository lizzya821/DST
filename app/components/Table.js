import React from "react";
import FoodRow from "./FoodRow.js";
import {useDispatch} from "react-redux"
import {orderFood} from "../redux/reducer"

const Table = props => {
  const foods = props.foods;
  const dispatch = useDispatch()
  return (
    <div>
      <table>
        <thead>
          <tr onClick={() =>dispatch(orderFood(event.target.innerText))}>
            <th>Name</th>
            <th>Image</th>
            <th>Health</th>
            <th>Sanity</th>
            <th>Hunger</th>
            <th>Restrictions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map.length &&
            foods.map(food => {
              return <FoodRow key={food.id} food={food} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
