const router = require('express').Router();
const { getAllThoughts, getOneThought, createThought, addReaction } = require('../../controllers/thought-controller');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getOneThought)

router
  .route('/:userId')

router
  .route('/:userId/:thoughtId').put(addReaction)
module.exports = router;