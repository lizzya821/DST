import React from "react"
import {useDispatch} from "react-redux"
import {useState} from "react"
import {createRecipe } from "../redux/reducer"
import IngredientSelect from "./IngredientForm"

const AddRecipe = props => {
    const [recipeIngredients, setRecipeIngredients] = useState({
        ingredient1: "1",
        ingredient2: "1", 
        ingredient3: "1", 
        ingredient4: "1", 
    })
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault()
        let info ={
            ingredients: Object.values(recipeIngredients), 
            foodId: props.location.foodId
        }
        dispatch(createRecipe(info))
        props.history.push("/")
    }
    return (
        <div>
            <form onChange={()=>setRecipeIngredients({...recipeIngredients, [event.target.name]: event.target.value})}  onSubmit={handleSubmit}>
                <label>Ingredients</label>
                <br></br>
                <br></br>
                <IngredientSelect/>
                <br></br>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipe