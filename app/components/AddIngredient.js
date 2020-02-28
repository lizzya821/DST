import React from "react"
import {useState} from "react"
import {createIngredient} from "../redux/reducer"
import {useDispatch} from "react-redux"

const AddIngredient = props => {
    const [ingredient, setIngredient] = useState({
        name: undefined, 
        imageURL: undefined
    })
    const dispatch = useDispatch();
    const handleSubmit =event => {
        event.preventDefault() 
        dispatch(createIngredient(ingredient))
        props.history.push("/")
    }
    return(
        <div>
            <h1>Add Ingredient</h1>
            <form onChange={() => setIngredient({...ingredient, [event.target.name]: event.target.value})} onSubmit={handleSubmit}>
                <label> Name: </label>
                <input name="name" value={ingredient.name} type="input" required/>
                <label> ImageURL: </label>
                <input name="imageURL" value={ingredient.imageURL}type="input" required/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddIngredient