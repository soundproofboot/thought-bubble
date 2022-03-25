const router = require('express').Router();
const { getAllThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thought-controller');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(deleteReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);
  
// router
//   .route('/:userId')

// router
//   .route('/:userId/:thoughtId')
//   .put(addReaction)
//   .delete(deleteReaction)
module.exports = router;