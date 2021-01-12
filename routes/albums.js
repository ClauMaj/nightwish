
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/albums',(req,res) => {
    res.render('albums',{
        title: "Nightwish - albums",
        allAlbums: data.albums,
        albums: data.albums,
        show: 0,
    });
});


router.get('/albums/:albumid',(req,res) => {
    let album = [];
    data.albums.forEach( (el) => {
        if (el.shortname ===req.params.albumid){
            album.push(el);
        }
    });

    res.render('albums',{
        title: "Nightwish - albums",
        allAlbums: data.albums,
        albums: album,
        show: 1,
    });
});

module.exports = router;