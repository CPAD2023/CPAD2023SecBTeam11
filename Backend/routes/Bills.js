const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Bills = require('../Models/Bills')

router.use(bodyParser.json());


router.get('/', (req, res) => {
    Bills.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {

    var bill = new Bills({
        Items: req.body.Items,
        AddCharges: req.body.AddCharges,
        PaymentMode: req.body.PaymentMode,
        TotalAmount: req.body.TotalAmount
    });
    bill.save()
    .then((result) => { 
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
})


module.exports = router;
