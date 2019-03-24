const express = require('express');
const router = express.Router();
const {Client} = require('pg');
const knex = require('knex');
const db = require('../database');

const path = require('path');
var dotenv = require('dotenv');
let confPath = path.join(__dirname,'.env' );
dotenv.config({ path: confPath });
const PORT = process.env.PORT || 3000;

router.get("/watches", (req, res, next) => {

    db.select().from("watches")
    .then((data) => {
        res.render('index', {
            jsonData: data  
        })
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    });
});

router.get("/watches/edit/:id", (req, res, next) => {

    let watch = req.params.id;

    db.select().from("watches").where('watchid', watch).first()
    .then((data) => {
        res.render('edit', {
            jsonData: data
        })
    }).catch((err) => {
        res.send(err);
    })

});

module.exports = router;