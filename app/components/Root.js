import React from "react"
import Table from "./Table"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood, filterMeat } from "../redux/reducer.js";
import {Link} from "react-router-dom"

const Root = () => {
  const foods = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
    return (
        <div>
            <h1>DON'T STARVE FOODS AND RECIPES</h1>
            <Link to="/addFood"> Add Food</Link>
            <Link to="/addIngredient"> Add Ingredient</Link>
            <div id="radios" onChange={() =>dispatch(filterMeat(event.target.value))}>
              <input type="radio" value="allFood" name="meatOrNoMeat"/>
              <label for="all">All</label>
              <input type="radio" value="meat" name="meatOrNoMeat"/>
              <label for="meat">Contains Meat</label>
            </div>
            <Table foods={foods}/>
        </div>
    )
}

export default Root