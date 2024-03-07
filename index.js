const express = require("express");

const port = 4000;
const app = express();

app.get("/", (req, res) => {
    res.json("Hello Welcome to backend");
})

app.listen(port, () => {
    console.log(`port is running on ${port}`);
})