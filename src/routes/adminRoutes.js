/*jshint esversion: 6 */
'use strict';
const express = require('express');
let adminRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let books = [
    {
        title: 'JavaScript The Good Parts',
        author: 'Douglas Crockford'
    },
    {
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke.'
    },
    {
        title: 'JavaScript The Definitive Guide, 6th Edition',
        author: 'David Flanagan'
    },
    {
        title: 'ng-book2',
        author: 'Ari Lerner'
    }
];

let router = () => {

    adminRouter.route('/')
        .get((req, res) => {
            res.send('Admin panel');
        });

    adminRouter.route('/addBooks')
        .get((req, res) => {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.insert(books, (err, results) => {
                    res.send(results);
                    db.close();
                });
            });
        });
    return adminRouter;
};

module.exports = router;
