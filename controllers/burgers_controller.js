const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function (result) {
        res.json({ id: result.insertId });
    })
    console.log(req.body)
});

router.put("/api/burger/:id", function (req, res) {
    let id = req.params.id;

    console.log("condition", condition);

    burger.update([
        "devoured = true"
    ], [
        `id = ${id}`
    ], function (result) {
        res.json({ id: result.insertId })
    })
})

module.exports = router;
