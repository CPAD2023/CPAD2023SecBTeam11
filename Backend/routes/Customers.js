const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Customer = require('../Models/Customers')


router.use(bodyParser.json());

router.get('/', (req, res) => {
    Customer.find({})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {
    let custData = new Customer({
        CustName: req.body.CustName,
        PhoneNo: req.body.PhoneNo,
        Pan: req.body.Pan_No,
        Address: req.body.Address
    });
    custData.save()
    .then((result) => { 
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
})

module.exports = router;