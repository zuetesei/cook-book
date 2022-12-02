// const { Recipe } = require('../models');

// const recipeController = {
//   // get all recipes
//   getAllRecipe(req, res) {
//     Recipe.find({})
//       .populate({
//         path: 'reactions',
//         select: '-__v'
//       })
//       .select('-__v')
//       .sort({ _id: -1 })
//       .then(dbRecipeData => res.json(dbRecipeData))
//       .catch(err => {
//         console.log(err);
//         res.sendStatus(400);
//       });
//   },

//   // get one recipe by id
//   getRecipeById({ params }, res) {
//     Recipe.findOne({ _id: params.id })
//       .populate({
//         path: 'reactions',
//         select: '-__v'
//       })
//       .select('-__v')
//       .then(dbRecipeData => res.json(dbRecipeData))
//       .catch(err => {
//         console.log(err);
//         res.sendStatus(400);
//       });
//   },

//   // createRecipe
//   createRecipe({ body }, res) {
//     Recipe.create(body)
//       .then(dbRecipeData => res.json(dbRecipeData))
//       .catch(err => res.json(err));
//   },

//   // update recipe by id
//   updateRecipe({ params, body }, res) {
//     Recipe.findOneAndUpdate({ _id: params.id }, body, {
//       new: true,
//       runValidators: true
//     })
//       .then(dbRecipeData => {
//         if (!dbRecipeData) {
//           res.status(404).json({ message: 'No recipe found with this id!' });
//           return;
//         }
//         res.json(dbRecipeData);
//       })
//       .catch(err => res.json(err));
//   },

//   // delete recipe
//   deleteRecipe({ params }, res) {
//     Recipe.findOneAndDelete({ _id: params.id })
//       .then(dbRecipeData => res.json(dbRecipeData))
//       .catch(err => res.json(err));
//   }
// };

// module.exports = recipeController;
