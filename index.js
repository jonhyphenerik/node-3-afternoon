const express = require('express');

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());

app.listen(SERVER_PORT, ()=>)