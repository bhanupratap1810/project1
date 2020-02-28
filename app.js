require("dotenv").config();
const express = require('express');
const hbs = require('hbs');
const app = express();

// view engine setup
app.set('view engine', 'hbs');

app.use(express.static('public'));
// Set handlebars partials folder
hbs.registerPartials(__dirname + '/views/partials');

// Middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("home",{title:"homepage",active: { dashboard: true }});
  });

const port = process.env.APP_PORT;
app.listen(port, () => console.log(`Server listening at: ${port}!`));