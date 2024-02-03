const router = require('express').Router();

const userRoutes = require('./user-routes');

const userCategory = require('./category-routes');

const userLocation = require('./location-routes');

//const userComment = require('./comment-routes');

const userState = require('./state-routes');

router.use('/users', userRoutes);

router.use('/category', userCategory);

router.use('/location', userLocation);

router.use('/state', userState);

//router.use('/comment', userComment);

module.exports = router;
