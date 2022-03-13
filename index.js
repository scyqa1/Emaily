const express = require('express');
const app = express(); // generates a new application that represents a running express app

// create a route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(4000);

//localhost:5000