const router = require('express').Router();
const { getAllUsers, getUserById, createUser, addFriend } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getUserById);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend);

  module.exports = router;