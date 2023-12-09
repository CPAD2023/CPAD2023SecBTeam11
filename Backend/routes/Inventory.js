const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Inventory = require('../Models/Inventory')

router.use(bodyParser.json());

router.use(bodyParser.json());

router.get('/', (req, res) => {
    Inventory.find({})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {
    let inventory = new Inventory({
        Category: req.body.Category,
        Weight: req.body.Weight,
        Quantity: req.body.Quantity
    });
    inventory.save()
    .then((result) => { 
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// router.post('/group', (req, res) => {
//     let inventory = new Inventory({
//         Category: req.body.Category
//     });
//     inventory.save()
//     .then((result) => { 
//         console.log(result);
//         res.send(result);
//     })
//     .catch((err) => {
//         res.send(err);
//     });
// })


module.exports = router;
