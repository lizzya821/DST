const router =  require('express').Router();
const {Recipe} = require("../models")
const {Food}  = require("../models")
const {IngredientRecipe} = require("../models")
const {Ingredient} = require("../models")

module.exports = router

router.get("/allFood", async (req, res, next)=> {
  try{
    let foods = await Food.findAll({
      include: { all: true, nested: true }
    })
    res.json(foods)
  }catch(err){
    next(err)
  }
})

router.get("/allFood/:order", async(req, res, next) => {
  try{
    let foods = await Food.findAll({
      include: { all: true, nested: true },
      order:[[`${req.params.order}`, "DESC"]]
    })
    res.json(foods)
  }catch(err){
    next(err)
  }
})

router.get("/meat", async(req, res, next) => {
  try{
    let foods = await Food.findAll({
      where: {containsMeat: true}, 
      include:{all: true, nested: true}
    })
    res.json(foods)
  }catch(err){
    next(err)
  }
})

router.post("/addRecipe", async(req, res, next) => {
  try{
    console.log("req.body", req.body)
    let newRecipe = await Recipe.create({foodId: req.body.foodId})
     await req.body.ingredients.forEach(ingredient => {
      return IngredientRecipe.create({recipeId: newRecipe.id, ingredientId: ingredient.id})
    })
    let updatedFood = await Food.findById(req.body.foodId, {
      iclude:{all: true, nested: true}
    })
    res.json(updatedFood)
  }catch(err){
    next(err)
  }
})

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });