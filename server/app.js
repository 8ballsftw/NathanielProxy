const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const port = 3000;

app.use(cors());
// app.get('/', (re, res) => {
//   res.send('hello')
// })


// app.use(createProxyMiddleware({target: 'http://localhost:3003'}))
// app.use( createProxyMiddleware({target: 'http://localhost:3001'}))
// app.use('/', createProxyMiddleware({target: 'http://localhost:3002'}))

app.use(express.static('public'));

app.listen(port, () => { console.log('server is up')});
