const express = require('express')
const router = express.Router()
const { saveContactMessage } = require('../controllers/messageController')

router.post('/send', saveContactMessage)

module.exports = router
