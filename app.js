const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/public/home/index.html");
});

//Here css is served without including this line but at 404 it doesnt work without this , idk how its happening. Lol!
app.get('/form', (req, res) => {
    res.sendFile(__dirname +"/public/registration/index.html");
});

app.use(express.static(__dirname));
app.get('*',(req,res)=>{
    res.status(404).sendFile(__dirname + "/public/error/index.html");
});

app.listen(3000, () => {
    console.log(`server is listening at port ${port}`);
});