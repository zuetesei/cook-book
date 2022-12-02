// const { Reaction, Recipe } = require('../models');

// const reactionController = {
//   addReaction({ params, reaction }, res) {
//     console.log(params);
//     Reaction.create(reaction)
//       .then(({ _id }) => {
//         return Recipe.findOneAndUpdate(
//           { _id: params.recipeId },
//           { $push: { Reactions: _id } },
//           { new: true }
//         );
//       })
//       .then(dbRecipeData => {
//         console.log(dbRecipeData);
//         if (!dbRecipeData) {
//           res.status(404).json({ message: 'No recipe found with this id!' });
//           return;
//         }
//         res.json(dbRecipeData);
//       })
//       .catch(err => res.json(err));
//   },

//   // remove Reaction
//   removeReaction({ params }, res) {
//     Reaction.findOneAndDelete({ _id: params.ReactionId })
//       .then(deletedReaction => {
//         if (!deletedReaction) {
//           return res.status(404).json({ message: 'No Reaction with this id!' });
//         }
//         return Recipe.findOneAndUpdate(
//           { _id: params.recipeId },
//           { $pull: { Reactions: params.ReactionId } },
//           { new: true }
//         );
//       })
//       .then(dbRecipeData => {
//         if (!dbRecipeData) {
//           res.status(404).json({ message: 'No recipe found with this id!' });
//           return;
//         }
//         res.json(dbRecipeData);
//       })
//       .catch(err => res.json(err));
//   },
// };

// module.exports = reactionController;
