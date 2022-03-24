const router = require('express').Router();
const { getAllThoughts, createThought, addReaction } = require('../../controllers/thought-controller');

router
  .route('/:userId')
  .post(createThought);

router
  .route('/:userId/:thoughtId').put(addReaction)
module.exports = router;