"use strict";

async function response(res, code = 200, message = null, data = null) {
    res.status(code).json({"status":(code < 400 ? 'Ok' : 'Error'),"code":code,"message":message, "data":data});
}

async function responseHeaderToken(res, token, code = 200, message = null, data = null) {
    res.header('x-auth-token', token).status(code).json({"status":(code < 400 ? 'Ok' : 'Error'),"code":code,"message":message, "data":data});
}

module.exports = {
    response,
    responseHeaderToken
};