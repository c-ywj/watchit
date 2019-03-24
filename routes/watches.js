const express = require('express');
const router = express.Router();
const db = require('../database');

// GET ALL
router.get("/watches", (req, res, next) => {

    db.select().from("watches")
    .then((data) => {
        res.render('index', {
            jsonData: data  
        })
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});


// CREATE FORM
router.get("/watches/create", (req, res, next) => {

    res.render('create');
});


// CREATE ONE
router.post("/watches", (req, res, next) => {

    let watch = req.body;

    db("watches").insert({
        modelname: watch.modelName,
        modelyear: watch.modelYear
    }).then((dbres) => {
        console.log("db insert response:  " + dbres);
        console.log("insert successful");
        res.redirect("/api/watches");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
})


// CONFIRM EDIT
router.get("/watches/edit/:id", (req, res, next) => {

    let watch = req.params.id;

    db.select().from("watches").where('watchid', watch).first()
    .then((data) => {
        res.render('edit', {
            jsonData: data
        })
    }).catch((err) => {
        res.send(err);
    });
});


// EDIT ONE
router.post("/watches/edit", (req, res, next) => {

    let watch = req.body;

    db('watches').where('watchid', '=', watch.watchID)
        .update({
            modelname: watch.modelName,
            modelyear: watch.modelYear
        }).then((data) => {
            res.redirect('/api/watches');
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
});


// CONFIRM DELETE
router.get("/watches/delete/:id", (req, res, next) => {

    let watch = req.params.id;

    db.select().from("watches").where('watchid', watch).first()
        .then((data) => {
            res.render('delete', {
                jsonData: data
            })
        }).catch((err) => {
            res.send(err);
        });
})


// DELETE ONE
router.post("/watches/delete", (req, res, next) => {
    
    let watch = req.body;

    db("watches").where('watchid', '=', watch.watchID)
        .del()
        .then((dbres) => {
            console.log('delete successfull' + dbres);
            res.redirect('/api/watches');
        }).catch((err) => {
            res.send(err);
        });
});

module.exports = router;