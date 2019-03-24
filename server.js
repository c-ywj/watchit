// server.js 
const express = require('express') ;
const app     = express();
const bodyParser = require('body-parser');
const watches = require('./routes/watches');
const {Client} = require('pg');

const path = require('path');
var dotenv = require('dotenv');
let confPath = path.join(__dirname,'.env' );
dotenv.config({ path: confPath });
const PORT = process.env.PORT || 3000;

// View engine
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);           // support master pages
app.set("view engine", "ejs");          // ejs view engine

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send("welcome to watchit");
});

app.use('/api', watches);
 

app.listen(PORT, () => { 
    console.log(`Server is up on ${PORT}`) 
}) 