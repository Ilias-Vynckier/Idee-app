const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const ideas = require("./idea.json");
const cors = require('cors');
app.use(cors());


// server.js or app.js


app.get("/", (req, res) => {
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    //const json = JSON.stringify({ idea: idea });

    res.header("Access-Control-Allow-Origin", "*");
    res.json(idea);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));