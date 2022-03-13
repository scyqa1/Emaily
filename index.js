const express = require('express');
const app = express(); // generates a new application that represents a running express app

// create a route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

//localhost:4000