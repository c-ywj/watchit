// server.js 
const express = require('express') ;
const app     = express();
const bodyParser = require('body-parser');
const {Client} = require('pg');

const path = require('path');
var dotenv = require('dotenv');
let confPath = path.join(__dirname,'.env' );
dotenv.config({ path: confPath });
const PORT = process.env.PORT || 3000;

// app.engine('html', require('ejs').renderFile); 
// app.set('view engine', 'ejs'); 

// View engine
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);           // support master pages
app.set("view engine", "ejs");          // ejs view engine

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
 
var result = [];


app.get('/', (req, res, next) => {
    let client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_SERVER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    });
     
    client.connect()
    .then(() => console.log("connected successfully"))
    .then(() => client.query("SELECT * FROM watches"))
    .then((data) => {
        console.log("****result****: " + data.rows[0].modelname);
        res.render('index', {
            jsonData: data.rows
        });
        client.end();
    })
    .catch(err => console.log(err))
    .finally(() => {
        client.end();
    });
});
 

app.listen(PORT, () => { 
    console.log('Server is up on 3000') 
}) 