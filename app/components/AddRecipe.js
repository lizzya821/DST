import React from "react"
import {useDispatch} from "react-redux"
import {useState} from "react"

const AddRecipe = props => {
    const {ingredients, setIngredients} = useState([])
    const dispatch = useDispatch();
    return (
        <div>
            <form>
                <label>Ingredients</label>
                <select>
                    <option>Cheese</option>
                </select>
            </form>
        </div>
    )
}

export default AddRecipe