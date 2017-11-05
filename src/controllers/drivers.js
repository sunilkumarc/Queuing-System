var Driver = require('../models/drivers');
var Request = require('../models/requests');

module.exports.set = (app) => {
    app.get('/drivers/:id', (req, res) => {
        Driver.findOne({driver_id: req.params.id}).then((driver) => {
            if (driver) {
                Request.find().then((requests) => {
                    res.status(200).send(requests);
                }).catch((err) => {
                    res.status(400).send(err);
                });
            } else {
                res.status(404).send('Driver not present in DB');
            }
        }).catch((err) => {
            res.status(400).send(err);
        });
    });

    app.post('/drivers/signup', (req, res) => {
        var driver = new Driver(req.body);

        driver.save(req.body).then((driver) => {
            res.status(200).send(driver);
        }).catch((err) => {
            res.status(400).send(err);
        })
    });
}