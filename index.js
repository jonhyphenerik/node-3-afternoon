// 
const express = require('express'),
      dotenv = require('dotenv'),
      massive = require('massive'),
      ctrlProducts = require('./products_controller');

dotenv.config();
let {SERVER_PORT, CONNECTION_STRING} = process.env;
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

massive(
    {connectionString: CONNECTION_STRING, 
         ssl: {rejectUnautorized: false}}
    )
    .then( db=> {app.set('db', db); console.log('db connected')} )
    .catch( err => console.log(err));


const app = express();

app.use(express.json());

// Endpoints
app.get('/api/products', ctrlProducts.getAll);
app.get('/api/products/:id', ctrlProducts.getOne);
app.post('/api/products', ctrlProducts.create);
app.put('/api/products/:id', ctrlProducts.update);
app.delete('/api/products/:id', ctrlProducts.delete);

app.listen(SERVER_PORT, ()=>console.log(`server running on ${SERVER_PORT}`));