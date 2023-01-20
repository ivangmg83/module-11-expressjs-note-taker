const express = require("express");
const path = require('path');
const api = require("./routes/index");
// set server port
const PORT = process.env.PORT || 3001;


// initialize the app
const app = express();

//middleware 
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.use("/api", api);

//Get notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});

//Get index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}`)
});
