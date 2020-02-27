const { db, Food, Ingredient, Recipe, IngredientRecipe} = require('./server/models')

const foods = [
    {   
        id: 1, 
        name: "Meatballs", 
        health: 3, 
        sanity: 5, 
        hunger: 62.5, 
        restrictions: ["two monster meats", "honey", "mandrake", "eggplant and another vegetable"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bf/Meatballs.png/revision/latest?cb=20130117000546",
        containsMeat: true
    }, 
    {
        id: 2,
        name: "Meaty Stew",
        health: 12, 
        sanity: 5, 
        hunger: 150, 
        restrictions: ["two monster meats", "honey", "mandrake", "twigs"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d4/Meaty_Stew.png/revision/latest?cb=20121215201357",
        containsMeat: true
    }, 
    {
        id: 3,
        name: "Dragon pie",
        health: 40, 
        sanity: 5, 
        hunger: 75, 
        restrictions: ["meats", "honey", "mandrake", "eggplant and another vegetable"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2b/Dragonpie.png/revision/latest?cb=20121215232541",
        containsMeat: false
    }
]

const recipes  = [
    {   
        id: 1, 
        foodId: 1, 
    }, 
    {
        id: 2, 
        foodId: 1,
    }, 
    {
        id: 3, 
        foodId: 2,
    }, 
    {
        id: 4, 
        foodId: 3
    }
] 

const ingredients = [
    {
        id: 1,
        name: "Monster Meat", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/81/Monster_Meat.png/revision/latest?cb=20121216110700"
    }, 
    {
        id: 2, 
        name: "Meat", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/58/Meat.png/revision/latest?cb=20121215214111"
    },
    {
        id: 3, 
        name: "Filler", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/ee/Filler.png/revision/latest?cb=20140507114409"
    }, 
    {
        id: 4,
        name: "Ice", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/77/Ice.png/revision/latest?cb=20140711022650"
    }, 
    {
        id: 5, 
        name: "Dragon Fruit", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/29/Dragon_Fruit.png/revision/latest?cb=20121215232310"
    }, 
    {
        id: 6, 
        name: "Twigs", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/76/Twigs.png/revision/latest?cb=20121216104433"
    }, 
    {
        id: 7, 
        name: "Egg", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/26/Egg.png/revision/latest?cb=20130315214629"
    }, 
    {
        id: 8, 
        name: "Fish", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fb/Fish.png/revision/latest?cb=20121216000645"
    }, 
    {
        id: 9, 
        name: "Berries", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/24/Berries.png/revision/latest?cb=20140311161723"
    }, 
    {
        id: 10, 
        name: "Frog Legs", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/52/Frog_Legs.png/revision/latest?cb=20121216095344"
    }, 
    {
        id: 11, 
        name: "Drumstick", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dd/Drumstick.png/revision/latest?cb=20121215232637"
    }, 
    {
        id: 12, 
        name: "Potato", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c2/Potato.png/revision/latest?cb=20180616094702"
    }, 
    {
        id: 13, 
        name: "Garlic", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cc/Garlic.png/revision/latest?cb=20180616094659"
    }, 
]

const ingRecipes = [
    {
        id: 1, 
        recipeId: 1, 
        ingredientId: 1
    }, 
    {
        id:2, 
        recipeId: 1, 
        ingredientId: 3, 
    },
    {
        id:3, 
        recipeId: 1, 
        ingredientId: 3, 
    },
    {
        id:4, 
        recipeId: 1, 
        ingredientId: 3, 
    }, 
    {
        id:5, 
        recipeId: 2, 
        ingredientId: 1, 
    }, 
    {
        id:6, 
        recipeId: 2, 
        ingredientId: 4, 
    },
    {
        id:7, 
        recipeId: 2, 
        ingredientId: 4, 
    }, 
    {
        id:8, 
        recipeId: 2, 
        ingredientId: 4, 
    }, 
    {
        id:9, 
        recipeId: 3, 
        ingredientId: 1, 
    },
    {
        id:10, 
        recipeId: 3, 
        ingredientId: 2, 
    },
    {
        id:11, 
        recipeId: 3, 
        ingredientId: 2, 
    },
    {
        id:12, 
        recipeId: 3, 
        ingredientId: 3, 
    }, 
    {
        id:13, 
        recipeId: 4, 
        ingredientId: 5, 
    }, 
    {
        id:14, 
        recipeId: 4, 
        ingredientId: 6, 
    }, 
    {
        id:15, 
        recipeId: 4, 
        ingredientId: 6, 
    }, 
    {
        id:16, 
        recipeId: 4, 
        ingredientId: 6, 
    }
]


const seed = async () => {
  try {
      console.log("Seeding the database")
    await db.sync({ force: true })
    await Food.bulkCreate(foods)
    await Recipe.bulkCreate(recipes, {returning: true})
    await Ingredient.bulkCreate(ingredients, {returning: true})
    await IngredientRecipe.bulkCreate(ingRecipes)
    await db.close()
  } catch (err) {
   console.log(err)
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}