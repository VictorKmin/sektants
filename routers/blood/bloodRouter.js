const express = require("express");
const router = express.Router();
const getById = require('../../controller/bloodController/getOneById');

router.get('/sektants/:id',getById);


module.exports = router;