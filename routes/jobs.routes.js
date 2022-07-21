const router = require('express').Router();
const JobsMiddleware = require('../middlewares/auth.middleware').verifyToken;
const JobsController = require('../controllers/jobs.controller');

router.get('/', JobsMiddleware, JobsController.get);
router.get('/:id', JobsMiddleware, JobsController.getById);

module.exports = router;