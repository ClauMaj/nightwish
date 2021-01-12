
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/about',(req,res) => {
    res.render('about',{
        title: "Nightwish - about",
        allAlbums: data.albums,
        albums: data.albums
    });
});

module.exports = router;