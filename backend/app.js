// require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const initPeerServer = require('./peer.js');
const initSocketIO = require('./sockets');
// const {createProxyMiddleware} = require('http-proxy-middleware');  // temporary proxy. Will be replaced with nginx
// const proxy = require('http-proxy-middleware');


let sslOptions = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt'),
};

const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'null', 'none', 'http://localhost:63342', '', 'https://localhost:3000, https://localhost'];
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};


///////////////////
// PeerJS Server //
///////////////////

const app1 = express();
const server1 = https.createServer(sslOptions, app1);

app1.get('/test', function (req, res) {
    res.json({msg: 'peerjs server test route'})
});

app1.use('/peer', initPeerServer(server1));
app1.use(morgan("combined"));
app1.use(helmet());
app1.use(cors());
server1.listen(5001, () => console.log('server1 listening on port: ', 5001));


//////////////////////
// Socket IO Server //
//////////////////////
const app2 = express();

app2.get('/test', function (req, res) {
    res.json({msg: 'socketIO server test route'})
});

app2.use(morgan("combined"));
app2.use(helmet());
app2.use(cors());
const server2 = https.createServer(sslOptions, app2);

initSocketIO(server2);
server2.listen(5002, () => console.log('server2 listening on port: ',  5002));


//////////////////
// Proxy Server // (not working atm)
//////////////////
// This is a bit of a improvised setup to be able to use the same port from the frontend for both.
// // Socket.io and peerjs-server apparently won't work within the same server.
// // A single websocket per user will be used to handle both, signaling and events, in the future (replacing both peerjs and socket.io)
// const port = process.env.PORT || 5000;
// const app = express();
//
// app.get('/test', function (req, res) {
//     res.json({msg: 'app2 test route'})
// });
//
// app.use('/peer', createProxyMiddleware({
//     target: 'http://localhost:5001',
//     changeOrigin: true,
//     ws: true,
//     // pathRewrite: {'^/peer': 'peer'}
// }));
//
// app.use('/socket', createProxyMiddleware({
//     target: 'http://localhost:5002',
//     changeOrigin: true,
//     ws: true,
//     pathRewrite: {'^/socket': ''}
// }));
//
// app.listen(80);


// Just for testing purposes
const app3 = express();
const server3 = https.createServer(sslOptions, app3);

app3.get('/', function (req, res) {
    res.json({msg: 'base server test route'});
});

server3.listen(443);