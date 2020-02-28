import React from "react";
import FoodRow from "./FoodRow.js";
import {useDispatch, useSelector} from "react-redux"
import {orderFood, fetchFood} from "../redux/reducer"
import { useEffect } from "react";


const Table = props => {
  const foods = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
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
        
            {foods.map(food => {
              return <FoodRow key={food.id} food={food} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
