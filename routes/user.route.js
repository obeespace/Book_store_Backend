const express = require('express')
const router = express.Router()

const {signup, signin} = require('../controller/user.controller.js')

router.post('/register', signup)
router.post('/login', signin)

module.exports = router