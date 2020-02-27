const Recipe = require("./recipe")
const Ingredient = require("./ingredient")
const Food = require("./food")
const IngredientRecipe = require("./ingredientRecipe")
const db = require("./db.js")

// Recipe.hasMany(Ingredient)
Recipe.hasMany(IngredientRecipe)
Ingredient.hasMany(IngredientRecipe)
IngredientRecipe.belongsTo(Ingredient)
Food.hasMany(Recipe)

module.exports = {
    db,
    Recipe, 
    Ingredient, 
    Food, 
    IngredientRecipe
}