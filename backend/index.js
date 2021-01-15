// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost/carrilloForum');

// App Setup
app.use(morgan('combined'));
app.use(cors());

app.use('/uploads', express.static('uploads'))


app.route('/', (req,res) => {
    res.send('Welcome to the API of Carrillo Forum! ')
})

// wrap the app into the two routers (no router way)
router(app);

app.use('/courses', express.json(), require('./controllers/courses'))
app.use('/users', express.json(), require('./controllers/users'))
app.use('/files', require('./controllers/files'))


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
