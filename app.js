const express = require('express');
const app = express();
const authRouter = require('./router/authRoute');
const databaseconnect = require('./config/databaseConfig');

databaseconnect();

app.use(express.json());

// consume the Router

app.use('/api/auth/', authRouter);

// It is a route which show on when server load

app.use('/', (req, res) => {
    res.status(200).json({ data: 'JWTauth server.'});

});

// module made for export where other will import this module

module.exports = app;