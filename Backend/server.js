// const express = require("express");
import express from 'express';   //error aayega to package.json mai "type":"module" likh do error solve ho jayega
const app = express();

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A Joke',
            content:"This is a Joke"
        },

        {
            id:2,
            title:'Another Joke',
            content:"This is a second joke"
        },

        {
            id:3,
            title:'A third Joke',
            content:"This is a third Joke"
        },

        {
            id:4,
            title:'A fourth Joke',
            content:"This is a fourth Joke"
        },

        {
            id:5,
            title:'A fith Joke',
            content:"This is a fifth Joke"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});