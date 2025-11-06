const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('the server is On');
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello world');
})