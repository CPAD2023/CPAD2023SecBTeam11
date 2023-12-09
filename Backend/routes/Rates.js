const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Rates = require('../Models/Rates')

router.use(bodyParser.json());

router.get('/', (req, res) => {
    var rate = 5600;
    Rates.find().sort({_id:-1}).limit(1)
    .then((result) => {
        console.log(result);
        if(result.length > 0){
            rate = result[0].GoldRate;
        }
        res.send({
            GoldRate: rate
        });
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {

    var rate = new Rates({
        GoldRate: req.body.GoldRate
    });
    rate.save()
    .then((result) => { 
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
})

module.exports = router;
