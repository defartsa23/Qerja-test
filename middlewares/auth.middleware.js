const jwt = require("jsonwebtoken");
const respon = require('../commons/helper/response.helper');

const config = process.env;

const verifyToken = (req, res, next) => {
    let token = null;
    if ( req.headers.authorization !== undefined ) token = req.headers.authorization.replace('Bearer ','');

    if (!token) {
        return respon.response(res, 403, "A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return respon.response(res, 401, "Invalid Token");
    }
    
    return next();
};

module.exports.verifyToken = verifyToken;