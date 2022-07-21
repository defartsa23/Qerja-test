const UsersModel = require('../models/users.model');
const bcrypt = require('bcrypt');
const respon = require('../commons/helper/response.helper');
const jwt = require("jsonwebtoken")

class AuthController {
    static async login(req, res) {
        try {
            const data_user = await UsersModel.getUser(req.body.username);

            if (data_user == null) return respon.response(res, 401, "Incorrect username or password.");
            if (!bcrypt.compareSync(req.body.password, data_user.password)) return respon.response(res, 401, "Incorrect username or password.");

            const expiresIn = '15m';
            const secret_key = process.env.TOKEN_KEY;
            const token = jwt.sign(
                data_user,
                secret_key,
                {expiresIn}
            );

            return respon.responseHeaderToken(res, token, 200, 'Success Login', {
                name: data_user.name,
                username: data_user.username
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AuthController;