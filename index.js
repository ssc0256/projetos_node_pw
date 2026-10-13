const express = require("express");
const app=express();
app.get('/', (req,res) => {
    res.send ('API FUNCIONANDO!!!')
})
module.exports = app;
