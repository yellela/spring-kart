require('./nodeConfig/config');
require('./models/db');
require('./nodeConfig/passportConfig');

const express = require('express');
const bodyparsar = require('body-parser');
const cros = require('cors');
const passport = require('passport');
const routsIndex = require('./meanRoutes/Index.routes');
var app = express();

// middleware

app.use(bodyparsar.json());
app.use(cros());
app.use(passport.initialize());
app.use('/api',routsIndex);

// start server 
app.listen(process.env.PORT,() => console.log(`Express server running at Port:${process.env.PORT}`));