
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/feedback', (req,res) => {

   res.render('feedback',{
      title: "Nightwish - feedback",
      allAlbums: data.albums,
  });

})

module.exports = router;