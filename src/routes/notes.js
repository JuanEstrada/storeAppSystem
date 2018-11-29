const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Notas web');
})

router.post('/notes/newNote', (req,res) => {
    console.log(req.body);
    res.send('0k');
})

router.get('/notes/add', (req, res) => {
    res.render('notes/newNote');
})
module.exports = router;