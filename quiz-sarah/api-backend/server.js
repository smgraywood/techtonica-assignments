//this is the barebones server to test is port is running
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log("Server is running on port 3001!"));
//this is the barebones server to test is port is running


// use express
const express = require('express');
// make app
const app = express();
// set port
const PORT = process.env.PORT || 3001;
const question = require('./question');

app.get('/api', (req, res) => {
  res.json(question);
});

// listen to port
app.listen(PORT, () => console.log('Server is running on port 3001!'));

// import express from 'express';
// import cors from 'cors';
// import questions from './questions.js';

// const app = express();

// app.use(cors());
// app.use(express.






// const question = JSON.parse(xhttp.responseText);

// const {
//     id,
//     title,
//     choices
// } = question;

//     document.getElementById('id').value = id;
//     document.getElementById('title').value = title;
//     document.getElementById('choices').value = choices;
   


