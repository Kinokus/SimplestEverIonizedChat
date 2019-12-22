const express = require('express');
const router = express.Router();

// move
let messages = [];


router.get('/', (req, res, next) => {
    res.send('respond with a resource messages');
    console.log(res.url);
});

router.post('/', (req, res, next) => {

    console.log(req.body);
    messages.push(req.body);
    res.send({status: 'got', messages:messages});
});

router.post('/check', (req, res, next) => {
    console.log(req.body);
    res.send({status: 'checked'});
});


module.exports = router;
