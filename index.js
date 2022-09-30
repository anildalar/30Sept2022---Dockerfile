const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Its working</h1>');
});

let port = 4000;
app.listen(port,()=>{
    console.log('listening on port ',port)
});