const Recipe = require("../models/recipeModel");

async function createRecipe(req, res) {
  try {
    const { title, ingredients, instructions } = req.body;

    // ✅ Validation
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const recipe = await Recipe.create({
      title,
      ingredients,
      instructions,
    });

    res.status(201).json({
      message: "Recipe created successfully",
      data: recipe,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating recipe",
      error: error.message,
    });
  }
}

async function getAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find();

    res.json({
      message: "Recipes fetched successfully",
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching recipe",
      error: error.message,
    });
  }
}

async function getRecipesById(req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      res.status(404).json({
        message: "Recipe not found",
      });
    } else {
      res.json({
        message: "Recipe fetched successfully",
        data: recipe,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Recipe fetching falied",
      error: error.message,
    });
  }
}

async function updateRecipeById(req, res) {
  try {
    const recipeId = req.params.id;

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.json({
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating recipe",
      error: error.message,
    });
  }
}

async function deleteRecipesById(req, res) {
  try {
    const recipeId = req.params.id;
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe Not Found",
      });
    } else {
      res.json({
        message: "Recipe deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting recipe",
      error: error.message,
    });
  }
}
module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipeById,
  deleteRecipesById,
};
