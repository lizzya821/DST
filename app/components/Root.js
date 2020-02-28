import React from "react";
import Table from "./Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood, filterMeat } from "../redux/reducer.js";
import { Link } from "react-router-dom";

const Root = () => {
  const foods = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  return (
    <div>
        <h1 class="display-3">DON'T STARVE FOODS AND RECIPES</h1>
      <nav class="navbar navbar-dark bg-dark">
        <Link class="badge badge-light" to="/addFood"> Add Food</Link>
        <Link class="badge badge-light" to="/addIngredient"> Add Ingredient</Link>
      </nav>
      <div
        id="radios"
        onChange={() => dispatch(filterMeat(event.target.value))}
      >
        <input class="radio" type="radio" value="allFood" name="meatOrNoMeat" />
        <label for="all">All</label>
        <input class="radio" type="radio" value="meat" name="meatOrNoMeat" />
        <label for="meat">Contains Meat</label>
      </div>
      <Table foods={foods} />
    </div>
  );
};

export default Root;
