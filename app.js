/*jshint esversion: 6 */
'use strict';

const express = require('express');
let app = express();
let port = process.env.PORT || 9000;
let nav = [
    {link: '/books', text: 'Books'},
    {link: '/authors', text: 'Authors'}
];
let booksRouter = require('./src/routes/booksRoutes')(nav);
let adminRouter = require('./src/routes/adminRoutes')();
// let authorsRouter = require('./src/routes/authorsRoutes')();
// let authRouter = require('./src/routes/authRoutes')();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', booksRouter);
app.use('/admin', adminRouter);
// app.use('/authors', authorsRouter);
// app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Awesome Books',
        nav: nav
    });
});

app.listen(port, (err) => {
    if (!err) {
        console.log('Server is running on http://localhost:' + port);
    }
});
