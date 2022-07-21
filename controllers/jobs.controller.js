const respon = require('../commons/helper/response.helper');
const axios = require('axios').default;
const querystring = require('querystring');

class JobsController {
    static async get(req, res) {
        try {
            let params = {};
            if(req.query.description) params['description'] = req.query.description;
            if(req.query.location) params['location'] = req.query.location;
            if(req.query.full_time) params['full_time'] = req.query.full_time;
            if(req.query.page) params['page'] = req.query.page;

            const temp_data = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json', { params });

            if (Object.keys(temp_data.data).length === 0) return respon.response(res, 404, 'Not Found', temp_data.data)
            return respon.response(res, 200, 'Success Get Data', temp_data.data)
        } catch (error) {
            console.log(error);
        }
    }

    static async getById(req, res) {
        try {
            const temp_data = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions/' + req.params.id);

            if (Object.keys(temp_data.data).length === 0) return respon.response(res, 404, 'Not Found', temp_data.data)
            return respon.response(res, 200, 'Success Get Data', temp_data.data)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = JobsController;