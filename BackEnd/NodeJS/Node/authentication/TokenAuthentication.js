const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = function (req, res, next) {
    var token = req.body.token || req.headers['access-token'];
    if(token){
        jwt.verify(token, config.secret, function (error, decoded) {
            if(error){
                console.log(error);
                return res.json({status : 500, message : 'TokenExpiredError', data : error});
            }else {
                req.decoded = decoded;
                return next();
            }
        })
    }else {
        res.redirect(401, '/')
    }
};