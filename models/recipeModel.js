const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
    id:{
        type:String,
        required: [true,"please add the recipe id"],

    },
    name:{
        type: String,
        required: [true,"please add the recipe name"],
    
    },
    cuisine:{
        type: String,
        required: [true,"please add the recipe cuisine"],
    },
    ingredient:{
        type: String,
        required: [true,"please add the recipe ingredient"],
    },
    meal:{
        type: String,
        required: [true,"please add the recipe meal"],
    },
});
module.exports=mongoose.model("Recipe",recipeSchema);