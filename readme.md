
# Band Albums(Nightwish) project

- Check live website here => http://ec2-3-21-128-144.us-east-2.compute.amazonaws.com/


## What it is

- In this project I put together an app that dynamically updates the DOM based on user selection and server response(throug an API that I built).
- The project also has a working chat function, implemented through socket.io and a feedback section connected to a JSON file on the server.

![Image of website](public/images/nightwish.png)

# Technologies and tools used:
- HTML 
- CSS/Bootstrap
- JavaScript
- AJAX 
- Node.js
- Express.js
- Ejs
- Socket.io
- The project is deployed on AWS EC2 Elastic Computing(Ubuntu server + installed nginx used as reverse proxy and load balancer)


## Some interesting code and facts

- Server side chat engine:

```javascript
let io = socket(server);
io.on('connection' , (socket) => {
    console.log('Client connected!!');
    io.emit('msgFromServer', "You are connected!");
    socket.on('msgFromClient', (msgClient) => {
        io.emit('msgFromServer', msgClient)
    })
})
```


- Part of the Api route that takes the user input(after it was read by the body parser) and stores it in the json file

```javascript
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
```


- Api route that retrieves elements from the json file and renders the page only with the data that the user requested

```javascript
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
```
- I used partials for code reusability and cleaner ejs

## Known issues: 
- At a future time I will fix the responsivness of the chat element and the delete function from the feedback entries