const {Tour} = require("../models/tour");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send('OK');
});

/*
router.get("/:id", async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour)
        return res.status(404).send("The tour with the given ID was not found.");

    res.send(tour);
});
*/
module.exports = router;
