import React from "react"
import IngredientSelect from "./IngredientForm"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {createFood} from "../redux/reducer"

const AddFood = props => {
    const [foodInfo, setFoodInfo] = useState({
        ingredient1: "1",
        ingredient2: "1", 
        ingredient3: "1", 
        ingredient4: "1", 
        name:undefined, 
        health: undefined, 
        sanity: undefined, 
        hunger: undefined, 
        imageURL: undefined, 
        restrictions: undefined, 
        containsMeat: false, 
    })
    const dispatch = useDispatch();
    const handleSubmit =event => {
        event.preventDefault()
        let info ={
            ingredients: [foodInfo.ingredient1, foodInfo.ingredient2, foodInfo.ingredient3, foodInfo.ingredient4], 
            food: {
                name: foodInfo.name, 
                health: foodInfo.health, 
                sanity: foodInfo.sanity, 
                hunger: foodInfo.hunger, 
                imageURL: foodInfo.imageURL, 
                containsMeat: foodInfo.containsMeat
            }
        }
        dispatch(createFood(info))
        props.history.push("/")
    }
    return(
        <div>
            <h1>Create New Food!</h1>
            <form onChange={() => setFoodInfo({...foodInfo, [event.target.name]: event.target.value})} onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" value={foodInfo.name} type="text" required/>
                <label>Health: </label>
                <input name="health" value={foodInfo.health} type="number" required/>
                <label>Sanity: </label>
                <input name="sanity" value={foodInfo.sanity} type="number" required/>
                <label>Hunger: </label>
                <input name="hunger" value={foodInfo.hunger} type="number" required/>
                <label>ImageURL: </label>
                <input name="imageURL" value={foodInfo.imageURL}type="text" required/>
                <label>Restrictions</label>
                <input name="restrictions" value={foodInfo.restrictions}type="text" />
                <label>Contains Meat: </label>
                <select name="containsMeat" value={foodInfo.containsMeat}>
                    <option value={false}>Does Not Have Meat</option>
                    <option value={true}>Has Meat</option>
                </select>
                <br></br>
                <br></br>
                <IngredientSelect/>
                <br></br>
                <br></br>
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}

export default AddFood