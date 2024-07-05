const express = require("express");
const {
    getRecipes,
    getRecipe,
    updateRecipe,
    createRecipe,
    deleteRecipe
}= require("../controllers/recipeController");
const router = express.Router();
router.route("/").get(getRecipes);

router.route("/:id").get(getRecipe);


router.route("/").post(createRecipe);

router.route("/:id").put(updateRecipe);

router.route("/:id").delete(deleteRecipe);

module.exports = router;
