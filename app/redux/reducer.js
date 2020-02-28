import axios from "axios"

const GET_FOODS = "GET_FOODS"
const ADD_RECIPE = "ADD_RECIPE"

const getFoods = foods => {
  return{
    type: GET_FOODS, 
    foods
  }
}
const addRecipe = updatedFood => {
  return{
    type: ADD_RECIPE, 
    updatedFood
  }
}

export const fetchFood = () => {
  return async dispatch => {
    try{
      let {data} = await axios.get("/api/allFood")
      dispatch(getFoods(data))
    }catch(err){
      console.log(err)
    }
  }
}

export const orderFood = (order) => {
  if(order === "Health" || "Sanity" || "Hunger"){
    order = order.toLowerCase()
    return async dispatch => {
      try{
        let {data} = await axios.get(`/api/allFood/${order}`)
        dispatch(getFoods(data))
      }catch(err){
        console.log(err)
      }
    }
  }
}

export const filterMeat = (value) => {
  return async dispatch =>{
    try{
      let{data} = await axios.get(`/api/${value}`)
      dispatch(getFoods(data))
    }catch(err){
      console.log(err)
    }
  }
}

export const createRecipe = (info) => {
  return async dispatch => {
    try{
      let{data} = await axios.post(`/api/addRecipe/${info.foodId}`, info.ingredients)
      dispatch(addRecipe(data))
    }catch(err){
      console.log(err)
    }
  }
}

export const createFood =(info) => {
  return async dispatch => {
    try{
      let {data} = await axios.post("/api/addFood", info)
      dispatch(getFoods(data))
    }catch(err){
      console.log(err)
    }
  }
}

export const createIngredient = info => {
  return async dispatch => {
    try{
      let {data} = await axios.post("/api/addIngredient", info)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }
}


 export function foodReducer (state = [], action) {
    switch(action.type){
      case GET_FOODS:
        return action.foods
      case ADD_RECIPE: 
       let filteredFoods = state.filter(food =>food.id !== action.updatedFood.id)
       return [...filteredFoods, action.updatedFood]
      default: 
        return state
    }
  }