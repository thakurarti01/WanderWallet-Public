/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

app.render()

// Route to handle form submissions
app.post('/contact', (req, res) => {
    // Extract data from the form submission
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Save the data to your database or perform any other actions
    // For example, you can use a database ORM like Mongoose for MongoDB
    // Or SQL queries if you're using a SQL database

    // Send a response back to the client
    res.status(200).send('Contact form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming form data
//app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, images, etc.)
//app.use(express.static('public'));

// Route to serve the contact form HTML page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/webpage.html');
});

// Route to handle form submissions
app.post('/contact', (req, res) => {
    // Extract data from the form submission
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Save the data to your database or perform any other actions
    // For example, you can use a database ORM like Mongoose for MongoDB
    // Or SQL queries if you're using a SQL database

    // Send a response back to the client
    res.send('Contact form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
