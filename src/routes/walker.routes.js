const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const Role = require('../helpers/role');

// Controllers
const roomController = require('../controllers/walker.controller');

// routes
router.get('/', roomController.getAll);

router.get(
	'/ask-verification/:id',
	authorize([Role.Admin, Role.PetWalker]),
	roomController.askForVerification
);

router.get(
	'/verify/:id',
	authorize([Role.Admin]),
	roomController.verifyWalker
);

module.exports = router;
