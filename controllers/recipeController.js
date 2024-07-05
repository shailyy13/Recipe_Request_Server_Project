const asyncHandler = require("express-async-handler");
const Recipe=require("../models/recipeModel")
const getRecipes = asyncHandler(async (req,res)=>{
    const recipes = await Recipe.find({});
        res.json(recipes);
    res.status(200).json({message:"get all recipes"});
});

const getRecipe = asyncHandler(async (req, res) => {

    const id = (req.params.id);
    try {
        const recipe = await Recipe.findById(id);
        
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        
        res.status(200).json(recipe); 
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
});


const createRecipe = asyncHandler(async (req,res)=>{
    console.log("the request body is:",req.body);
    const {id,name,cuisine,ingredient,meal}=req.body;
    if(!id||!name||!cuisine||!ingredient||!meal){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const recipes= await Recipe.create({
        id,
        name,
        cuisine,
        ingredient,
        meal
    });
    res.status(201).json(recipes);
  
});
const updateRecipe = asyncHandler(async (req,res)=>{
    const recipe= await Recipe.findById(req.params.id);
    if(!recipe){
        res.status(404);
        throw new Error("Recipe not found");
    }
    const updatedRecipe= await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({updatedRecipe});
});
const deleteRecipe = asyncHandler(async (req,res)=>{
    const recipe= await Recipe.findById(req.params.id);
    if(!recipe){
        res.status(404);
        throw new Error("recipe not found");
    }
    await Recipe.deleteOne({_id: req.params.id});
    res.status(200).json({recipe});
});

module.exports={getRecipes,getRecipe,createRecipe,updateRecipe,deleteRecipe,};
