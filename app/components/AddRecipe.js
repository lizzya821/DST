import React from "react"
import {useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import Axios from "axios"
import {createRecipe } from "../redux/reducer"

const AddRecipe = props => {
    const [recipeIngredients, setRecipeIngredients] = useState({
        ingredient1: 1,
        ingredient2: 1, 
        ingredient3: 1, 
        ingredient4: 1, 
    })
    const [ingredients, setIngredients] = useState([])
    const dispatch = useDispatch();
    console.log(recipeIngredients)
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
        <div>
            <form>
                <label>Ingredients</label>
                <br></br>
                <br></br>
                <label>Ingredient 1:</label>
                <select onChange={()=>setRecipeIngredients({...recipeIngredients, ingredient1: event.target.value})}>
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 2: </label>
                <select onChange={()=>setRecipeIngredients({...recipeIngredients, ingredient2: event.target.value})}>
                    {ingredients.map(ingredient => {
                        return <option name="ingredient2" key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 3: </label>
                <select>
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 4: </label>
                <select>
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <br></br>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipe