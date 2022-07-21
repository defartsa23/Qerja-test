const createError = require('http-errors');
const respon = require('../commons/helper/response.helper');

module.exports.notFound = function(req, res, next) {
    next(createError(404));
};

module.exports.error = function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    respon.response(res, (err.status || 500), err.message);
};