
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/albums',(req,res) => {
    res.render('albums',{
        title: "Nightwish - albums",
        allAlbums: data.albums,
        albums: data.albums,
        pageID: "allAlbums"
    });
});


router.get('/albums/:albumid',(req,res) => {
    let album = [];
    data.albums.forEach( (el) => {
        if (el.shortname ===req.params.albumid){
            album.push(el);
        }
    });
    let title = "Nightwish" + " - " + album[0].albumname
    res.render('albums',{
        title: title,
        allAlbums: data.albums,
        albums: album,
        pageID: "oneAlbum"
    });
});

module.exports = router;