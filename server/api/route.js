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

router.get("/allIngredients", async(req, res, next) => {
  try{
    let ingredients = await Ingredient.findAll()
    res.json(ingredients)
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

router.post("/addRecipe/:foodId", async(req, res, next) => {
  try{
    let newRecipe = await Recipe.create({returning: true})
    let food = await Food.findByPk(req.params.foodId)
    await food.addRecipe(newRecipe)
    await IngredientRecipe.create({recipeId: newRecipe.id, ingredientId: req.body[0]})
    await IngredientRecipe.create({recipeId: newRecipe.id, ingredientId: req.body[1]})
    await IngredientRecipe.create({recipeId: newRecipe.id, ingredientId: req.body[2]})
    await IngredientRecipe.create({recipeId: newRecipe.id, ingredientId: req.body[3]})
    let updatedFood = await Food.findOne({
      where: {
        id: req.params.foodId
      }, 
      include:[{all: true, nested: true}]
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