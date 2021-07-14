const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getHomeView);
router.get('/create', controller.getCreateView);
router.get('/info/:id', controller.getInfoView);
router.get('/update/:id', controller.getUpdateView);
router.get('/delete/:id', controller.deleteRecord);

router.post('/create', controller.createRecord);
router.post('/update/:id', controller.updateRecord);

module.exports = router;