const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const homepageRouer = require('./routers/homePage/homepageRouter');
const apiRouter = require('./routers/api/apiRouter');
const bloodRouter = require('./routers/blood/bloodRouter');
const sektantModel = require('./models/sektant');

const app = express();

mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.set('sektantModel', sektantModel);

app.use('/', homepageRouer);
app.use('/api', apiRouter);
app.use('/blood', bloodRouter);

app.listen(3000, function () {
    console.log("Listening port 3000");
});
