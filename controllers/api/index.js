const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-route')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;