require('./main.scss');
require('./index.css');
var $ = require('jquery');
var sub = require('./sub.js');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);