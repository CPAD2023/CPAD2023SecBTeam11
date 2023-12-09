const express       = require("express");
const app           = express();
const PORT          = 8000;
const mongoose = require('mongoose');
const customers = require('./routes/Customers');
const Rates = require('./routes/Rates');
const Bills = require('./routes/Bills');
const Inventory = require('./routes/Inventory');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());
app.use("/customers", customers);
app.use("/rates", Rates);
app.use("/bills", Bills);
app.use("/inventory", Inventory);

const admin = require("firebase-admin");
const credentials = require("./billing-system-a667a-firebase-adminsdk-hmymc-2bf5221ce9.json");
admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.post('/signup', async (req, res)=>{
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    try{
        const userResponse = await admin.auth().createUser({
            email: email,
            password: password,
            emailVerified: false,
            disabled: false
        });
        res.status(200).json(userResponse);
    } catch(error){
        res.status(401).json({ error: 'user creation failed' });
    }
})

app.post('/signin', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    try{
        const result = await admin.auth().getUserByEmail(email);
        res.status(200).json(result);
    } catch(error){
        console.log(error);
        res.status(401).json({ error: 'Authentication failed' });
    }
});
const url = "mongodb+srv://ashutoshkarmakar72:idOaNz7nCvWEmJde@jewellerybillingsystem.spl49dx.mongodb.net/";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(PORT, () => {
        console.log('Server is running at port : '+ PORT);
    })    
})
.catch((err) => {
    console.log(err)
});


