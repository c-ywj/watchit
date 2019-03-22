// const express = require('express');
// const router = express.Router();
// const {Client} = require('pg');

// const path = require('path');
// var dotenv = require('dotenv');
// let confPath = path.join(__dirname,'.env' );
// dotenv.config({ path: confPath });
// const PORT = process.env.PORT || 3000;

// const client = new Client({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_SERVER,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// });


// router.get("/watches", (req, res, next) => {
//     let result = [];
//     client.connect()
//     .then(() => console.log("connected successfully"))
//     .then(() => client.query("SELECT * FROM watches"))
//     .then((res) => {
//         result = res.rows;
//         console.table(res.rows);
//     })
//     .catch(err => console.log(err))
//     .finally(() => client.end());
//     res.render('index', {
//         data: result
//     });
// })

// module.exports = router;