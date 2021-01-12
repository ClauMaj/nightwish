


const express = require('express');
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs');

// body parser
router.use(express.json());
router.use(express.urlencoded({extended: false}));



router.get('/api', (req,res) => {

    res.json(feedbackData)

});

router.post('/api',(req,res) => {

    req.body.datetime = new Date().toLocaleString();
    feedbackData.unshift(req.body);
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf8', (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.json(feedbackData);

})
module.exports = router;