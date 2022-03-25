const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get thought by id
  getOneThought({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought with this id' });
          return;
        }
        res.json(dbThoughtData)
      })
      .catch(err => {
        res.status(400).json(err)
      });
  },

  // create thought

  createThought({ params, body }, res) {
    Thought.create(body)
      .then( ({ _id}) => {
        return User.findOneAndUpdate(
          { _id: params.userId},
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this id' })
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.json(err);
      })
  },

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought with this id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  }
}

module.exports = thoughtController;