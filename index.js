const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const PORT = 3005;
const Emailer = require('./Emailer.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const log = (...input) => console.log(...input);

app.get('/', (req, res) => {
    log('Recieved: ', req.body);
    let data = req.data;
    log('Responding with: ', data);
    res.send(data);
});

app.post('/', (req, res) => {
    log('Recieved: ', req.body);
    let data = req.body;
    log('Responding with: ', data);
    /** Will be sending an email to the email provided
     * 
     * 
     * Emailer(data.email, `Hey ${data.name}, \n I see you signed up with us stating you are having some ${data.reason}`);
     * 
     ***********/
    res.send(data);
})

app.listen(PORT);
log(`Currently listening on PORT ${PORT}`);

