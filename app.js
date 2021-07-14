const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const dynamoose = require('dynamoose');

const app = express();

// Views Setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Bootstrap and jQuery Dist
app.use('/bs', express.static(path.join(__dirname, './node_modules/bootstrap/dist/')));
app.use('/jQ', express.static(path.join(__dirname, './node_modules/jquery/dist/')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: "crud_secret",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.errorAlert = req.flash('error');
    res.locals.successAlert = req.flash('success');

    next();
});

// DynamoDB Connect with AWS IAM
dynamoose.aws.sdk.config.update({
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": "" // ap-southeast-1
});

// Router
app.use('/', require('./routes'));

module.exports = app;