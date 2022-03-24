const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, addFriend } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend);

  module.exports = router;