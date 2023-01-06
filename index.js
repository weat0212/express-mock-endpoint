const express = require('express');
const cors = require('cors');
const app1 = express();
const app2 = express();

app1.use(cors());
app2.use(cors());

var morgan  = require('morgan');
app1.use(morgan('combined'));
app2.use(morgan('combined'));

const port1 = 3000;
const port2 = 8080;

app1.get('/', (req, res) => {
    res.send('Hello World!')
})

app1.post('/json', (req, res) => {
    res.json({status:"200",message:"OK",data:null,time:"2022-11-29T16:53:38.649015",success:true})
})

app1.get('/json', (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.set("apiKey1", "abc");
    res.header("apiKey2", "abc");
    res.set({
        "apiKey3": "abc",
        "apiKey4": "abc"
    });
    res.json({status:"200",message:"OK",data:null,time:"2022-11-29T16:53:38.649015",success:true});
})

app2.get('/EXT', (req, res) => {
    res.send("Success!!!");
})

app2.get('/EXT/*', (req, res) => {
    res.send("Success HI!!!");
})

app1.listen(port1, () => {
    console.log(`App1 listening on port ${port1}`)
})

app2.listen(port2, () => {
    console.log(`App2 listening on port ${port2}`)
})