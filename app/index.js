import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import "../public/style.css";
import Root from "./components/Root"
import AddRecipe from "./components/AddRecipe"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddFood from "./components/AddFood"
import AddIngredient from './components/AddIngredient'

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
    <Route exact path ="/" component={Root}/>
    <Route path ="/addRecipe" component={AddRecipe}/>
    <Route path ="/addFood" component={AddFood}/>
    <Route path ="/addIngredient" component={AddIngredient}/>
    </Router>
  </Provider>,
  document.getElementById("app")
);
