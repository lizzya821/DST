import React from "react";
import {useState, useEffect} from "react"
import Axios from "axios"

const IngredientSelect = props => {
    let numbers= ["1", "2", "3", "4"]
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        async function fetch(){
            try{
                let {data} = await Axios.get("/api/allIngredients")
                setIngredients(data)
            }catch(err){
                console.log(err)
            }
        }
        fetch()
    }, [])
  return (
    <>
      {numbers.map(number => {
          return (
    <>
      <label>{`Ingredient ${number}:`}</label>
      <select name={`ingredient${number}`}>
        {ingredients.map(ingredient => {
          return (
            <option key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
            </option>
          );
        })}
      </select>
      </>
          )
      })}
    </>
  );
};

export default IngredientSelect
