const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');
// db connection
const db = require('./config/mogoose-connection');
// routes
const ownersModel = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owners', ownersModel);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(4000);