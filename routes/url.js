const {handleGenerateNewShortURL,handleGetAnalytics} = require('../controllers/url')
const express = require('express')
const router = express.Router()
router.post('/',handleGenerateNewShortURL)
router.get('/analytics',handleGetAnalytics)
module.exports = router