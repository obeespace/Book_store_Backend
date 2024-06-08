const express = require('express')
const router = express.Router()
const {
    createBooks,
    getBook,
    getBooks,
    updateBook,
    deleteBook
} = require('../controller/book.contoller.js')



router.post('/', createBooks)

router.get('/:id', getBook)

router.get('/', getBooks)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

module.exports = router