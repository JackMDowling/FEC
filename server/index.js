/* eslint-disable no-undef */
/* eslint-disable no-console */
const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const { API_TOKEN, CAMPUS } = require('../config.js');

const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res) => {
  axios({
    method: req.method,
    url: req.url,
    baseURL: apiURL,
    headers: {
      Authorization: API_TOKEN,
    },
  })
    .then((response) => {
      console.log('here is your stuff: ', response.data);
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(response.status).send(err);
    });
});

app.listen(3000, console.log('Connected to the island'));
