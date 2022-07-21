const router = require('express').Router();

router.use('/', require('./auth.routes'));
router.use('/jobs', require('./jobs.routes'));

module.exports = router;