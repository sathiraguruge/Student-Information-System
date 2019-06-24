const express = require('express');
const router = express.Router();
const MailService = require('../services/MailService');

router.post('/', (req, res) => {
    MailService.sendMail(req.body.recepient, req.body.recepientName, req.body.subject, req.body.messageType, req.body).then( data => {
        res.json(data)
    }).catch( err => {
        res.json(err);
    });
});

module.exports = router;