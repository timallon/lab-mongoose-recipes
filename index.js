const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';
    const recipe1 = {
      title: "Chicken Nuggets",
      level: "UltraPro Chef",
      ingredients: ["700ml of vegetable oil", "50g of plain flour", "300g of breadcrumbs", "10 chicken nuggets"],
      cuisine: "American",
      dishType: "breakfast",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      duration: 10,
      creator: "Tim Allon",
     created: 2022-03-23,
    };
// SORRY - SPENT ALL EVENING TRYING TO CONNECT THE DB TO COMPASS, BUT I DON'T THINK 
// MONGODB IS DESIGNED TO WORK WITH WSL2.
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
   return Recipe.create(recipe1);
   
    //model.create



    // Run your code here, after you have insured that the connection was made
  })
  .then((result) => {
    console.log(result);

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  