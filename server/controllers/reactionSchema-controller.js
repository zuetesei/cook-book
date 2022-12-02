const { reactionSchema, Recipe } = require('../models');

const commentController = {
  addreactionSchema({ params, body }, res) {
    console.log(params);
    reactionSchema.create(body)
      .then(({ _id }) => {
        return Recipe.findOneAndUpdate(
          { _id: params.recipeId },
          { $push: { comments: _id } },
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

  // add reply to comment
  addReply({ params, body }, res) {
    reactionSchema.findOneAndUpdate(
      { _id: params.commentId },
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

  // remove comment
  removereactionSchema({ params }, res) {
    reactionSchema.findOneAndDelete({ _id: params.commentId })
      .then(deletedreactionSchema => {
        if (!deletedreactionSchema) {
          return res.status(404).json({ message: 'No comment with this id!' });
        }
        return Recipe.findOneAndUpdate(
          { _id: params.recipeId },
          { $pull: { comments: params.commentId } },
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
      { _id: params.commentId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbRecipeData => res.json(dbRecipeData))
      .catch(err => res.json(err));
  }
};

module.exports = commentController;
