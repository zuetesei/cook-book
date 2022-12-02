const { reactionSchema, Recipe } = require('../models');

const reactionSchemaController = {
  addreactionSchema({ params, body }, res) {
    console.log(params);
    reactionSchema.create(body)
      .then(({ _id }) => {
        return Recipe.findOneAndUpdate(
          { _id: params.recipeId },
          { $push: { reactionSchemas: _id } },
          { new: true }
        );
      })
      .then(dbRecipeData => {
        console.log(dbRecipeData);
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id!' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => res.json(err));
  },

  // add reply to reactionSchema
  addReply({ params, body }, res) {
    reactionSchema.findOneAndUpdate(
      { _id: params.reactionSchemaId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id!' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => res.json(err));
  },

  // remove reactionSchema
  removereactionSchema({ params }, res) {
    reactionSchema.findOneAndDelete({ _id: params.reactionSchemaId })
      .then(deletedreactionSchema => {
        if (!deletedreactionSchema) {
          return res.status(404).json({ message: 'No reactionSchema with this id!' });
        }
        return Recipe.findOneAndUpdate(
          { _id: params.recipeId },
          { $pull: { reactionSchemas: params.reactionSchemaId } },
          { new: true }
        );
      })
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id!' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
    reactionSchema.findOneAndUpdate(
      { _id: params.reactionSchemaId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbRecipeData => res.json(dbRecipeData))
      .catch(err => res.json(err));
  }
};

module.exports = reactionSchemaController;
