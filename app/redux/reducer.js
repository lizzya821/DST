import axios from "axios"

const GET_FOOD = "GET_FOOD"
const ADD_RECIPE = "ADD_RECIPE"

const getFood = food => {
  return{
    type: GET_FOOD, 
    food
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
      dispatch(getFood(data))
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
        dispatch(getFood(data))
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
      dispatch(getFood(data))
    }catch(err){
      console.log(err)
    }
  }
}

export const createRecipe = (info) => {
  return async dispatch => {
    try{
      let{data} = await axios.post(`/api/addRecipe/${info.foodId}`, info.ingredients)
      console.log("data", data)
      dispatch(addRecipe(data))
    }catch(err){
      console.log(err)
    }
  }
}


 export function foodReducer (state = [], action) {
    switch(action.type){
      case GET_FOOD:
        return action.food
      case ADD_RECIPE: 
       let filteredFoods = state.filter(food =>food.id !== action.updatedFood.id)
       return [...filteredFoods, action.updatedFood]
      default: 
        return state
    }
  }