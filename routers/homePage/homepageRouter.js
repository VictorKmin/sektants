const express = require("express");
const router = express.Router()
const homePage = require('../../controller/homepageController/homepage')
router.get('/', homePage);

module.exports = router;