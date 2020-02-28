const { db, Food, Ingredient, Recipe, IngredientRecipe} = require('./server/models')

const foods = [
    {   
        name: "Meatballs", 
        health: 3, 
        sanity: 5, 
        hunger: 62.5, 
        restrictions: ["two monster meats", "honey", "mandrake", "eggplant and another vegetable"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bf/Meatballs.png/revision/latest?cb=20130117000546",
        containsMeat: true
    }, 
    {
        name: "Meaty Stew",
        health: 12, 
        sanity: 5, 
        hunger: 150, 
        restrictions: ["two monster meats", "honey", "mandrake", "twigs"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d4/Meaty_Stew.png/revision/latest?cb=20121215201357",
        containsMeat: true
    }, 
    {
        name: "Dragon pie",
        health: 40, 
        sanity: 5, 
        hunger: 75, 
        restrictions: ["meats", "honey", "mandrake", "eggplant and another vegetable"],
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2b/Dragonpie.png/revision/latest?cb=20121215232541",
        containsMeat: false
    }
]


const ingredients = [
    {
        name: "Monster Meat", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/81/Monster_Meat.png/revision/latest?cb=20121216110700"
    }, 
    {
        name: "Meat", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/58/Meat.png/revision/latest?cb=20121215214111"
    },
    { 
        name: "Filler", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/ee/Filler.png/revision/latest?cb=20140507114409"
    }, 
    {
        name: "Ice", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/77/Ice.png/revision/latest?cb=20140711022650"
    }, 
    {
        name: "Dragon Fruit", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/29/Dragon_Fruit.png/revision/latest?cb=20121215232310"
    }, 
    { 
        name: "Twigs", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/76/Twigs.png/revision/latest?cb=20121216104433"
    }, 
    {
        name: "Egg", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/26/Egg.png/revision/latest?cb=20130315214629"
    }, 
    {
        name: "Fish", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fb/Fish.png/revision/latest?cb=20121216000645"
    }, 
    {
        name: "Berries", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/24/Berries.png/revision/latest?cb=20140311161723"
    }, 
    { 
        name: "Frog Legs", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/52/Frog_Legs.png/revision/latest?cb=20121216095344"
    }, 
    { 
        name: "Drumstick", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dd/Drumstick.png/revision/latest?cb=20121215232637"
    }, 
    { 
        name: "Potato", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c2/Potato.png/revision/latest?cb=20180616094702"
    }, 
    {
        name: "Garlic", 
        imageURL: "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cc/Garlic.png/revision/latest?cb=20180616094659"
    }, 
]




const seed = async () => {
  try {
      console.log("Seeding the database")
    await db.sync({ force: true })
    await Food.bulkCreate(foods, {returning: true})
    await Ingredient.bulkCreate(ingredients, {returning: true})
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