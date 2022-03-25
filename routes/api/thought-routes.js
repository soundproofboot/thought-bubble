const router = require('express').Router();
const { getAllThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction } = require('../../controllers/thought-controller');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:userId')

router
  .route('/:userId/:thoughtId').put(addReaction)
module.exports = router;