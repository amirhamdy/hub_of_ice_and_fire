const http = require("../misc/httpServise");
const config = require('config');

exports.index = async (req, res) => {
    const {data} = await http.get(config.get('apiEndPoint'));
    res.send(data);
};