const express = require('express');
const app = express();

var routes = require('./routes');

app.use(express.json());
app.use('/', routes);

app.listen(3000, function(){
    console.log('Server listening on port 3000:');
}); 