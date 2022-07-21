'use strict';
const tables = require('./tables');

class UsersModel {
    static async getUser(username) {
        const query = {
            where: {
                username
            },            
            raw: true,
        }
        return await tables["users"].findOne(query)
    }
}

module.exports = UsersModel;