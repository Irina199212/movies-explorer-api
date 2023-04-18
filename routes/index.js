const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { signUp, signIn } = require('../middlewares/validation/auth');
const NotFoundError = require('../errors/notfound');

router.post('/signup', signUp, createUser);
router.post('/signin', signIn, login);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = router;
