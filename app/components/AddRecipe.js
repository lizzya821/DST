import React from "react"
import {useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import Axios from "axios"
import {createRecipe } from "../redux/reducer"

const AddRecipe = props => {
    const [recipeIngredients, setRecipeIngredients] = useState({
        ingredient1: "1",
        ingredient2: "1", 
        ingredient3: "1", 
        ingredient4: "1", 
    })
    const [ingredients, setIngredients] = useState([])
    const dispatch = useDispatch();
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
    const handleSubmit = (event) => {
        event.preventDefault()
        let info ={
            ingredients: Object.values(recipeIngredients), 
            foodId: props.location.foodId
        }
        dispatch(createRecipe(info))
        // props.history.push("/")
    }
    return (
        <div>
            <form onChange={()=>setRecipeIngredients({...recipeIngredients, [event.target.name]: event.target.value})}  onSubmit={handleSubmit}>
                <label>Ingredients</label>
                <br></br>
                <br></br>
                <label>Ingredient 1:</label>
                <select name="ingredient1">
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 2: </label>
                <select name="ingredient2">
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 3: </label>
                <select name="ingredient3">
                    {ingredients.map(ingredient => {
                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                    })}
                </select>
                <label>Ingredient 4: </label>
                <select name="ingredient4">
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