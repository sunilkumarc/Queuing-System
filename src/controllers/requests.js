var Request = require('../models/requests');

module.exports.set = (app) => {
    app.post('/requests/create', (req, res) => {
        var request = new Request(req.body);
        
        request.save(req.body).then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(400).send(err);
        });
    });
}