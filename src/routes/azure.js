const router = require('express').Router();
const userController = require('../controllers/azure');

router.post('/create',userController.createOne);
router.get('/getall',userController.getAll);


module.exports = router;