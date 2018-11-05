const express = require("express");
const router = express.Router()

const findAllSektants = require('../../controller/apiController/findAllSectants')
const findOneByID = require('../../controller/apiController/findOneByID')
const createSectant = require('../../controller/apiController/createSektant')
const deleteBiId = require('../../controller/apiController/deleteById')

router.get('/sektants', findAllSektants);

router.get('/sektants/:id', findOneByID);

router.post('/sektants', createSectant);

router.delete('/sektants/:id', deleteBiId);

module.exports = router;