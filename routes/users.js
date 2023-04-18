const router = require('express').Router();
const { patchUser } = require('../middlewares/validation/user');
const {
  updateUser,
  getCurrentUser,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', patchUser, updateUser);

module.exports = router;
