const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/patient', patientController.list);
router.get('/patient/add', patientController.add);
router.get('/patient/patologia', patientController.patologia)


module.exports = router;