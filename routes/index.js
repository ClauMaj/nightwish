
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/',(req,res) => {
    res.render('index',{
        title: "Nightwish",
        allAlbums: data.albums,
        albums: data.albums
    });
});

module.exports = router;