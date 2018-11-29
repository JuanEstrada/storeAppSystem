const express = require('express');
const router = express.Router();

router.get('/catalog/catalog', (req, res) => {
    res.render('users/signin');
});


module.exports = router;