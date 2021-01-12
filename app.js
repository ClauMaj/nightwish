
const express = require('express');
const app = express();
app.set('view engine','ejs');
// app.set('views','views');
app.use(express.static('public'));


app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));



app.listen (3000, () => {
    console.log("Server is running on port 3000");
});