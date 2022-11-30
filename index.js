import * as dotenv from "dotenv";
import dbConnection from "./db.config.js";
import Recipe from "./models/Recipe.model.js";
import recipesfile from './data.json' assert { type: 'json' };
import mongoose from "mongoose";

dotenv.config();

dbConnection();

let data={
    "title":"Burger",
    "level":"Easy Peasy",
    "ingredientes":["Salt","Meat","Pepper"],
    "cuisine":"classic",
    "dishType": "main_course",
    "image": "https://images.media-allrecipes.com/images/75131.jpg",
    "duration":"10",
    "creator":"Antonio"
};

//Iterations (1) & (2)
Recipe.create(data);
const recipeOne = Recipe.find().then(recipes => {console.log(recipes[0].title)});

//Iteration (3)
Recipe.insertMany(recipesfile).then(recipes => {console.log(recipes[2].title)});

//Iteration (4)
Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'},{duration: 100},{new: true, runValidators: true});
//Iteration (5)
Recipe.deleteOne({title: 'Carot Cake'});
//Iteration (6)
await mongoose.disconnect();



