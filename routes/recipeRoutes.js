const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipeById,
  deleteRecipesById,
} = require("../controllers/recipeController");
const RecipeRouter = express.Router();

RecipeRouter.post("/", createRecipe);

RecipeRouter.get("/", getAllRecipes);

RecipeRouter.get("/:id", getRecipesById);

RecipeRouter.patch("/:id", updateRecipeById);

RecipeRouter.delete("/:id", deleteRecipesById);

module.exports = RecipeRouter;
