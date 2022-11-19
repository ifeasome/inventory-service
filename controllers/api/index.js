const router = require('express').Router();
const deviceRoutes = require('./devices');
const modelRoutes = require('./models');

router.use('/devices', deviceRoutes);
router.use('/models', modelRoutes);

module.exports = router;