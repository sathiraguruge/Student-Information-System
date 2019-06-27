const express = require('express');
const router = express.Router();
const UserLogin = require('../authentication/Login');

router.post('/', (req, res) => {
    UserLogin.login(req.body.Username, req.body.Password).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});
module.exports = router;